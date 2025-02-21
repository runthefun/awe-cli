// @ts-check

import { watchPatches, watchScripts } from "./watchScripts.js";
import { promises as fs } from "fs";
import {
  pathToRemoteUri,
  getEmit,
  getGameId,
  getRemoteScripts,
} from "./utils.js";
import { syncUp } from "./sync.js";
import { ApiClient } from "./api.js";
import { login } from "./login.js";
import { Logger } from "./logger.js";
import chalk from "chalk";

export async function watch(opts = {}) {
  //
  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    Logger.error(`No game ID found!`);
    return;
  }

  await Logger.withSpinner("Logging in...", async () => {
    await login();
  });

  await Logger.withSpinner("Syncing game scripts...", async () => {
    await syncUp({ gameId });
  });

  console.log("\n👀 Watching for scripts changes...\n");

  const spinner = Logger.spinner();
  let frame = 0;

  watchPatches({
    onPatch: async (patch) => {
      frame++;
      try {
        let currentFrame = frame;
        const msg = `${patch.op} ${patch.data.uri}`;
        spinner.text = msg;
        spinner.color = "yellow";
        spinner.start();
        const t1 = performance.now();
        let res = await ApiClient.instance.saveScripts(gameId, [patch]);
        const t2 = performance.now();
        Logger.verbose(`Saved (${res}) in ${t2 - t1}ms`);
        if (currentFrame === frame) {
          spinner.stop();
        }
      } catch (err) {
        spinner.fail(err.message);
      }
    },
    ignoreInitial: true,
    compile: true,
  });
}
