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
import { Logger } from "./logger.js";

export async function syncUp(opts = {}) {
  //
  let t1, t2;

  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    throw new Error("No game ID found in package.json metadata");
  }

  Logger.verbose(`Syncing local changes to game ${gameId}...`);

  t1 = performance.now();
  const remoteFiles = await getRemoteScripts({ gameId });
  t2 = performance.now();
  Logger.verbose(`Remote files fetched in ${t2 - t1}ms`);

  t1 = performance.now();
  const localFiles = await getLocalScripts();
  t2 = performance.now();
  Logger.verbose(`Local files fetched in ${t2 - t1}ms`);

  // Track all changes to be made
  const patches = [];

  t1 = performance.now();

  // Process local files
  for (const [uri, filePath] of Object.entries(localFiles)) {
    //
    t1 = performance.now();
    const content = await fs.readFile(filePath, "utf-8");
    t2 = performance.now();
    Logger.verbose(`readFile ${uri} read in ${t2 - t1}ms`);

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
      Logger.verbose(`New file: ${uri}`);
    } else if (remoteFile.code !== content) {
      // Changed file
      t1 = performance.now();
      const emit = getEmit(filePath);
      t2 = performance.now();
      Logger.verbose(`Emit ${uri} computed in ${t2 - t1}ms`);

      patches.push({
        op: "change",
        data: {
          name,
          uri,
          code: content,
          emit,
        },
      });
      Logger.verbose(`Changed: ${uri}`);
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
    Logger.verbose(`Deleted: ${uri}`);
  }

  t2 = performance.now();
  Logger.verbose(`Changes computed in ${t2 - t1}ms`);

  if (patches.length === 0) {
    Logger.verbose("No changes to sync");
    return 0;
  }

  // Apply all changes
  Logger.verbose(`Applying ${patches.length} changes...`);
  t1 = performance.now();
  await ApiClient.instance.saveScripts(gameId, patches);
  t2 = performance.now();
  Logger.verbose(`Synced ${patches.length} changes in ${t2 - t1}ms`);
  return patches.length;
}

export async function syncDown(opts = {}) {
  //
  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    throw new Error("No game ID found in package.json metadata");
  }

  const remoteFiles = await getRemoteScripts({ gameId });
  const localFiles = await getLocalScripts();

  // sync with remote files: add new remote, update changed remote, delete missing remote
  for (const [uri, remoteFile] of Object.entries(remoteFiles)) {
    const localFile = localFiles[uri];
    if (!localFile || localFile.code !== remoteFile.code) {
      // update local
      const filePath = remoteUriToPath(uri);
      const relativePath = path.relative(process.cwd(), filePath);
      Logger.verbose(`Updating local: ${relativePath}`);
      await fs.writeFile(filePath, remoteFile.code, "utf-8");
    }
  }

  // delete missing local
  // for (const uri in localFiles) {
  //   if (!remoteFiles[uri]) {
  //     await fs.unlink(localFiles[uri]);
  //   }
  // }
}
