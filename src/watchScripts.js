// @ts-check

import chokidar from "chokidar";
import path from "path";
import { promises as fs } from "fs";
import { syncUp } from "./sync.js";
import { getEmit, isAllowedExt, nanoid, pathToRemoteUri } from "./utils.js";
import { Logger } from "./logger.js";
const srcDir = path.join(process.cwd(), "src");

export function watchScripts(opts) {
  // Initialize watcher
  const watcher = chokidar.watch(srcDir, {
    ignored: (filePath, stats) => {
      const res = stats?.isFile() ? !isAllowedExt(filePath) : false;
      // if (res) {
      //   Logger.verbose("ignored", filePath);
      // }
      return res;
    },
    ignoreInitial: opts.ignoreInitial ?? false,
    persistent: true,
  });

  watcher.on("add", (filePath) => {
    // Logger.verbose("add", filePath);
    opts.callback({ op: "add", filePath });
  });

  watcher.on("change", (filePath) => {
    // Logger.verbose("change", filePath);
    opts.callback({ op: "change", filePath });
  });

  watcher.on("unlink", (filePath) => {
    // Logger.verbose("unlink", filePath);
    opts.callback({ op: "remove", filePath });
  });

  watcher.on("error", (error) => {
    Logger.error(error);
  });

  Logger.verbose(`Watching for file changes in src directory...`);

  return watcher;
}

export function watchPatches(opts = {}) {
  //
  const watcher = watchScripts({
    ignoreInitial: opts.ignoreInitial ?? false,
    callback: async ({ op, filePath }) => {
      //
      let patch = { op };

      const uri = pathToRemoteUri(filePath);

      if (op === "add" || op === "change") {
        //
        const code = await fs.readFile(filePath, "utf-8");

        let emit = opts.noCompile ? null : getEmit(filePath, code);

        patch.data = {
          uri,
          code,
          emit,
        };

        if (op === "add") {
          patch.data.id = `script-${nanoid()}`;
        }
      } else {
        patch.data = {
          uri,
        };
      }
      opts.onPatch(patch);
    },
  });

  return watcher;
}
