// @ts-check

import { createServer } from "http";
import { promises as fs } from "fs";
import { parse as parseUrl } from "url";
import open from "open";
import { AWE_SITE } from "./contants.js";
import {
  getToken,
  setToken,
  deleteToken,
  getGameId,
  pathToRemoteUri,
} from "./utils.js";
import { watchScripts } from "./watch.js";

export async function start() {
  //
  const gameId = await getGameId();

  if (!gameId) {
    console.log(`No game ID found!`);
    return;
  }

  const token = await getToken();

  if (!token) {
    console.log(`No token found. Please login first.`);
    return;
  }

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

    console.log("Client connected ", req.socket.remoteAddress);

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Credentials": "true",
    });

    watchPatches(req, res);

    req.on("close", () => {
      console.log("Client disconnected");
      res.end();
    });
  });

  server.listen(3568, () => {
    const address = server.address();
    if (!address || typeof address === "string") {
      server.close();
      console.error("Failed to start server");
      return;
    }

    console.log(`Server started at http://localhost:${address.port}`);

    // const loginUrl = `${AWE_SITE}/studio/${gameId}?dev=true`;
    // console.log(`Opening browser for login...`);
    //open(loginUrl);
  });
}

function watchPatches(req, res) {
  //
  const watcher = watchScripts({
    callback: async ({ op, filePath }) => {
      const code = await fs.readFile(filePath, "utf-8");
      const uri = pathToRemoteUri(filePath);
      res.write(`data: ${JSON.stringify({ op, uri, code })}\n\n`);
    },
  });

  req.on("close", () => {
    watcher.close();
  });
}
