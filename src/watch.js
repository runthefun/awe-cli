import chokidar from "chokidar";
import path from "path";
import { syncUp } from "sync.js";

const srcDir = path.join(process.cwd(), "src");

// Initialize watcher
const watcher = chokidar.watch(["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"], {
  cwd: srcDir,
  ignoreInitial: false,
  persistent: true,
});

watcher.on("add", () => scheduleSync());
watcher.on("change", () => scheduleSync());
watcher.on("unlink", () => scheduleSync());

let syncScheduleTimeout = null;

function scheduleSync() {
  if (syncScheduleTimeout) {
    clearTimeout(syncScheduleTimeout);
  }
  syncScheduleTimeout = setTimeout(syncUp, 1000);
}

let isSyncing = false;
async function sync() {
  if (isSyncing) {
    console.log("Sync already in progress");
    return;
  }
  try {
    isSyncing = true;
    await syncUp();
  } finally {
    isSyncing = false;
  }
}

console.log("Watching for file changes in src directory...");
