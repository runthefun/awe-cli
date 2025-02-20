// @ts-check
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

  // let t1 = performance.now();
  const remoteFiles = await getRemoteScripts({ gameId });
  // let t2 = performance.now();
  // console.log(`Remote files fetched in ${t2 - t1}ms`);

  // let t1 = performance.now();
  const localFiles = await getLocalScripts();
  // let t2 = performance.now();
  // console.log(`Local files fetched in ${t2 - t1}ms`);

  // Track all changes to be made
  const patches = [];

  // t1 = performance.now();

  // Process local files
  for (const [uri, filePath] of Object.entries(localFiles)) {
    //
    // t1 = performance.now();
    const content = await fs.readFile(filePath, "utf-8");
    // t2 = performance.now();
    // console.log(`readFile ${uri} read in ${t2 - t1}ms`);

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
      // t1 = performance.now();
      const emit = getEmit(filePath);
      // t2 = performance.now();
      // console.log(`Emit ${uri} computed in ${t2 - t1}ms`);

      patches.push({
        op: "replace",
        data: {
          name,
          uri,
          code: content,
          emit,
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

  // t2 = performance.now();
  // console.log(`Changes computed in ${t2 - t1}ms`);

  if (patches.length === 0) {
    console.log("No changes to sync");
    return;
  }

  // Apply all changes
  console.log(`Applying ${patches.length} changes...`);
  // t1 = performance.now();
  await ApiClient.instance.saveScripts(gameId, patches);
  // t2 = performance.now();
  // console.log(`Patching completed in ${t2 - t1}ms`);
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
