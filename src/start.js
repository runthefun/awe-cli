// @ts-check

import { createServer } from "http";
import { parse as parseUrl } from "url";
import { formatPatch, getGameId } from "./utils.js";
import { watchPatches } from "./watchScripts.js";
import { login } from "./login.js";
import { syncUp } from "./sync.js";
import { ApiClient } from "./api.js";
import { Logger } from "./logger.js";
import chalk from "chalk";
import { AWE_SITE } from "./contants.js";
import open from "open";

export async function start() {
  //
  const gameId = await getGameId();

  if (!gameId) {
    Logger.error(`No game ID found!`);
    return;
  }

  await Logger.withSpinner("Logging in...", async () => {
    await login();
  });

  await Logger.withSpinner("Syncing game scripts...", async () => {
    await syncUp({ gameId });
  }).catch((error) => {
    Logger.error(error.cause || error.message);
  });

  let clients = new Set();

  const server = createServer(async (req, res) => {
    //
    if (!req.url) {
      res.writeHead(404);
      return res.end();
    }

    const { pathname, query } = parseUrl(req.url, true);

    if (pathname === "/favicon.ico") {
      res.writeHead(204);
      return res.end();
    }

    if (pathname !== "/patches") {
      res.writeHead(404);
      return res.end();
    }

    Logger.log(`Client connected ${req.socket.remoteAddress}`);

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Credentials": "true",
    });

    clients.add(res);

    req.on("close", () => {
      Logger.log("Client disconnected");
      clients.delete(res);
      res.end();
    });
  });

  let watcher = null;

  server.listen(3568, () => {
    //
    const address = server.address();
    if (!address || typeof address === "string") {
      server.close();
      Logger.error("Failed to start server");
      return;
    }

    Logger.log(
      `\nServer started at ${chalk.green(`http://localhost:${address.port}`)}`
    );

    console.log("👀 Watching for scripts changes...\n");

    watcher = watchPatches({
      ignoreInitial: true,
      onPatch: async (patch) => {
        Logger.verbose(`Patch received ${patch.op} ${patch.data.uri}`);
        for (const client of clients) {
          client.write(`data: ${JSON.stringify(patch)}\n\n`);
        }
        scheduleCommit([patch]);
      },
    });

    server.on("close", () => {
      watcher?.close();
    });

    Logger.log(`Opening ${AWE_SITE}/studio/${gameId}?dev=true`);
    open(`${AWE_SITE}/studio/${gameId}?dev=true`);
  });

  let commitQueue = [];
  let commitTimeout = null;

  async function scheduleCommit(patches) {
    commitQueue.push(...patches);
    if (commitTimeout) {
      clearTimeout(commitTimeout);
    }
    commitTimeout = setTimeout(() => {
      const uris = chalk.dim(commitQueue.map((p) => formatPatch(p)).join(", "));
      Logger.withSpinner(`Committing changes (${uris})...`, async () => {
        await _commitPatches();
      }).catch((error) => {
        Logger.error(error.cause || error.message);
      });
    }, 200);
  }

  async function _commitPatches() {
    while (commitQueue.length > 0) {
      const patches = commitQueue.slice(0);
      commitQueue = [];
      Logger.verbose(`Committing ${patches.length} patches...`);
      let t1 = performance.now();
      let result = await ApiClient.instance.saveScripts(gameId, patches);
      let t2 = performance.now();
      Logger.verbose(
        `Committed ${patches.length} patches in ${t2 - t1}ms, saved ${
          result?.changes
        } changes`
      );
    }
  }
}
