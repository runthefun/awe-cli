import { promises as fs } from "fs";
import { ApiClient } from "./api.js";
import {
  getGameId,
  getLocalScripts,
  getRemoteScripts,
  getEmit,
  remoteUriToPath,
} from "./utils.js";
import path from "path";

export async function syncUp(opts = {}) {
  //
  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    throw new Error("No game ID found in package.json metadata");
  }

  console.log(`Syncing local changes to game ${gameId}...`);

  const remoteFiles = await getRemoteScripts({ gameId });
  const localFiles = await getLocalScripts();

  // Track all changes to be made
  const patches = [];

  // Process local files
  for (const [uri, filePath] of Object.entries(localFiles)) {
    //
    const content = await fs.readFile(filePath, "utf-8");

    const remoteFile = remoteFiles[uri];

    const name = path.basename(uri);

    if (!remoteFile) {
      // New file
      patches.push({
        op: "add",
        data: {
          name,
          uri,
          code: content,
          emit: getEmit(filePath),
        },
      });
      console.log(`New file: ${uri}`);
    } else if (remoteFile.code !== content) {
      // Changed file
      patches.push({
        op: "replace",
        data: {
          name,
          uri,
          code: content,
          emit: getEmit(filePath),
        },
      });
      console.log(`Changed: ${uri}`);
    }
    // Remove from remote files map to track deletions
    delete remoteFiles[uri];
  }

  // Remaining remote files were deleted locally
  for (const uri in remoteFiles) {
    patches.push({
      op: "remove",
      data: {
        uri,
      },
    });
    console.log(`Deleted: ${uri}`);
  }

  if (patches.length === 0) {
    console.log("No changes to sync");
    return;
  }

  // Apply all changes
  console.log(`Applying ${patches.length} changes...`);
  await ApiClient.instance.saveScripts(gameId, patches);
  console.log("Sync completed successfully!");
}

export async function syncDown(opts = {}) {
  //
  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    throw new Error("No game ID found in package.json metadata");
  }

  console.log(`Syncing with game ${gameId}...`);

  const remoteFiles = await getRemoteScripts({ gameId });
  const localFiles = await getLocalScripts();

  // sync with remote files: add new remote, update changed remote, delete missing remote
  for (const [uri, remoteFile] of Object.entries(remoteFiles)) {
    const localFile = localFiles[uri];
    if (!localFile || localFile.code !== remoteFile.code) {
      // update local
      const filePath = remoteUriToPath(uri);
      console.log(`Updating local: ${filePath}`);
      await fs.writeFile(filePath, remoteFile.code, "utf-8");
    }
  }

  // delete missing local
  // for (const uri in localFiles) {
  //   if (!remoteFiles[uri]) {
  //     await fs.unlink(localFiles[uri]);
  //   }
  // }

  console.log("Sync completed successfully!");
}
