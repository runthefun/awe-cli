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

export async function watch(opts = {}) {
  //
  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    console.log(`No game ID found!`);
    return;
  }

  await login();

  await syncUp({ gameId });

  watchPatches({
    onPatch: async (patch) => {
      console.log(patch.op, patch.data.uri);
      const t1 = performance.now();
      let res = await ApiClient.instance.saveScripts(gameId, [patch]);
      const t2 = performance.now();
      console.log(`Saved (${res}) in ${t2 - t1}ms`);
    },
    ignoreInitial: true,
    compile: true,
  });
}
