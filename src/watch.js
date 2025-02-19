import chokidar from "chokidar";
import path from "path";
import { syncUp } from "./sync.js";
import { isAllowedExt } from "./utils.js";

const srcDir = path.join(process.cwd(), "src");

export function watchScripts() {
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
    console.log("add", filePath);
    scheduleSync();
  });

  watcher.on("change", (filePath) => {
    console.log("change", filePath);
    scheduleSync();
  });

  watcher.on("unlink", (filePath) => {
    console.log("unlink", filePath);
    scheduleSync();
  });

  let syncScheduleTimeout = null;

  function scheduleSync() {
    if (syncScheduleTimeout) {
      clearTimeout(syncScheduleTimeout);
    }
    syncScheduleTimeout = setTimeout(sync, 1000);
  }

  let isSyncing = false;
  async function sync() {
    if (isSyncing) {
      console.log("Sync already in progress");
      return;
    }
    try {
      isSyncing = true;
      // let t1 = performance.now();
      await syncUp();
      // let t2 = performance.now();
      // console.log(`Sync completed in ${t2 - t1}ms`);
    } finally {
      isSyncing = false;
    }
  }

  watcher.on("error", (error) => {
    console.error("Error watching scripts", error);
  });

  console.log(`Watching for file changes in src directory...`);
}
