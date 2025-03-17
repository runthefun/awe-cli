import { getToken } from "./utils.js";
import { AWE_SITE } from "./contants.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Logger } from "./logger.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class ApiClient {
  //
  _instance = null;

  static get instance() {
    if (!this._instance) {
      this._instance = new ApiClient();
    }
    return this._instance;
  }

  constructor(baseUrl = `${AWE_SITE}/api/dev`) {
    this.baseUrl = baseUrl;
  }

  async queryApi(method, params) {
    //
    const token = await getToken();

    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        method,
        params: [params],
      }),
    }).catch((error) => {
      throw new Error(`Failed to query API ${method}: ${error}`);
    });

    if (!response.ok) {
      throw new Error(`Failed to query API ${method}: ${response.statusText}`);
    }

    const result = await response.json();
    if (result.type === "Error") {
      throw new Error(`Error in API call ${method}: ${result.error}`);
    }
    return result.value;
  }

  async getScripts(gameId) {
    const result = await this.queryApi("fetchScripts", {
      id: gameId,
    });
    return {
      gameId,
      slug: result.slug,
      headline: result.headline,
      scripts: result.scripts,
    };
  }

  async createGame({ title, mode = "default" }) {
    const gameId = await this.queryApi("createGame", { title, mode });
    return gameId;
  }

  async fetchDts(name) {
    try {
      const res = await fetch(`${AWE_SITE}/typings/${name}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${name}`);
      }
      return await res.text();
    } catch (error) {
      // Fallback to local file
      Logger.verbose(`Failed to fetch dts ${name} from remote`);
      Logger.verbose("Falling back to local file");
      try {
        const localPath = path.join(__dirname, "./typings", name);
        const content = await fs.promises.readFile(localPath, "utf-8");
        return content;
      } catch (localError) {
        throw new Error(`Failed to fetch dts ${name} from remote and local`);
      }
    }
  }

  async fetchTypes(opts = { mode: "default" }) {
    //
    const typefiles =
      opts.mode === "default"
        ? {
            "awe-scripting.d.ts": "oo-scripting.d.ts",
          }
        : {
            "awe-scripting.d.ts": "oo-scripting-vibe.d.ts",
          };

    let types = {};

    await Promise.all(
      Object.entries(typefiles).map(async ([dest, src]) => {
        const content = await this.fetchDts(src);
        types[dest] = content;
      })
    );

    return types;
  }

  async saveScripts(gameId, patches) {
    const result = await this.queryApi("saveScripts", { gameId, patches });
    if (result.errors) {
      // errors: Record<uri, error>
      let errorMsgs = "The following errors occurred while saving:\n";
      for (const uri in result.errors) {
        errorMsgs += `${uri}: ${result.errors[uri]}\n`;
      }
      throw new Error("Errors while saving scripts", {
        cause: errorMsgs,
      });
    }
    return result;
  }

  async getCurrentGameId() {
    const result = await this.queryApi("getCurrentGameId", {});
    return result.id;
  }
}
