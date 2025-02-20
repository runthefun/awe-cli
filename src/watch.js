// @ts-check

import chokidar from "chokidar";
import path from "path";
import { syncUp } from "./sync.js";
import { isAllowedExt } from "./utils.js";

const srcDir = path.join(process.cwd(), "src");

export function watchScripts(opts) {
  // Initialize watcher
  const watcher = chokidar.watch(srcDir, {
    ignored: (filePath, stats) => {
      const res = stats?.isFile() ? !isAllowedExt(filePath) : false;
      // if (res) {
      //   console.log("ignored", filePath);
      // }
      return res;
    },
    ignoreInitial: false,
    persistent: true,
  });

  watcher.on("add", (filePath) => {
    // console.log("add", filePath);
    scheduleSync({ op: "add", filePath });
  });

  watcher.on("change", (filePath) => {
    // console.log("change", filePath);
    scheduleSync({ op: "change", filePath });
  });

  watcher.on("unlink", (filePath) => {
    // console.log("unlink", filePath);
    scheduleSync({ op: "remove", filePath });
  });

  let syncScheduleTimeout = null;

  function scheduleSync(params) {
    if (opts.syncDelay != null) {
      if (syncScheduleTimeout) {
        clearTimeout(syncScheduleTimeout);
      }
      syncScheduleTimeout = setTimeout(
        () => opts.callback(params),
        opts.syncDelay
      );
    } else {
      opts.callback(params);
    }
  }

  watcher.on("error", (error) => {
    console.error("Error watching scripts", error);
  });

  console.log(`Watching for file changes in src directory...`);

  return watcher;
}

export function watchFullSync(opts = {}) {
  //
  let isSyncing = false;

  try {
    watchScripts({
      syncDelay: opts.syncDelay ?? 1000,
      callback: async (params) => {
        //

        if (isSyncing) {
          console.log("Sync already in progress");
          return;
        }

        try {
          isSyncing = true;
          // let t1 = performance.now();
          console.log("Syncing...");
          await syncUp();
          console.log("Sync completed");
          // let t2 = performance.now();
          // console.log(`Sync completed in ${t2 - t1}ms`);
        } finally {
          isSyncing = false;
        }
      },
    });
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
