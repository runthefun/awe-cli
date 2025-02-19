// @ts-check

import { createServer } from "http";
import { parse as parseUrl } from "url";
import open from "open";
import { AWE_SITE } from "./contants.js";
import { getToken, setToken, deleteToken } from "./utils.js";

export async function login() {
  return new Promise(async (resolve, reject) => {
    //
    const token = await getToken();

    if (token) {
      console.log(`Already logged in!`);
      return resolve(token);
    }

    const server = createServer(async (req, res) => {
      //
      try {
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

        if (pathname !== "/callback") {
          res.writeHead(404);
          return res.end();
        }

        const token = query.access_token;

        if (token) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Login successful! You can close this tab.");

          await setToken(token);
          console.log(`Login successful!`);
          resolve(token);
        } else {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Failed to get token.");
          reject("Failed to get token.");
        }
      } catch (error) {
        console.error(error);
        res.writeHead(500);
        res.end();
      } finally {
        server.close();
      }
    });

    server.listen(0, () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject("Failed to start server");
        return;
      }

      const loginUrl = `${AWE_SITE}/authorize?redirect_uri=http://localhost:${address.port}/callback`;
      console.log(`Opening browser for login...`);
      console.log(`Waiting for login to be completed...`);
      open(loginUrl);
    });
  });
}
