// @ts-check

import { createServer } from "http";
import { parse as parseUrl } from "url";
import { getGameId } from "./utils.js";
import { watchPatches } from "./watchScripts.js";
import { login } from "./login.js";
import { syncUp } from "./sync.js";
import { ApiClient } from "./api.js";

export async function start() {
  //
  const gameId = await getGameId();

  if (!gameId) {
    console.log(`No game ID found!`);
    return;
  }

  await login();

  await syncUp({ gameId });

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

    console.log("Client connected ", req.url, req.socket.remoteAddress);

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
      console.log("Client disconnected");
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
      console.error("Failed to start server");
      return;
    }

    console.log(`Server started at http://localhost:${address.port}`);
    console.log(`Listening for patches...`);

    watcher = watchPatches({
      ignoreInitial: true,
      onPatch: async (patch) => {
        console.log("Patch received", patch.op, patch.data.uri);
        for (const client of clients) {
          client.write(`data: ${JSON.stringify(patch)}\n\n`);
        }
        scheduleCommit([patch]);
      },
    });

    server.on("close", () => {
      watcher?.close();
    });
  });

  let commitQueue = [];
  let commitTimeout = null;

  async function scheduleCommit(patches) {
    commitQueue.push(...patches);
    if (commitTimeout) {
      clearTimeout(commitTimeout);
    }
    commitTimeout = setTimeout(_commitPatches, 1000);
  }

  async function _commitPatches() {
    while (commitQueue.length > 0) {
      const patches = commitQueue.slice(0);
      commitQueue = [];
      console.log(`Committing ${patches.length} patches...`);
      let t1 = performance.now();
      let nbChanges = await ApiClient.instance.saveScripts(gameId, patches);
      let t2 = performance.now();
      console.log(
        `Committed ${patches.length} patches in ${t2 - t1}ms`,
        `saved ${nbChanges} changes`
      );
    }
  }
}
