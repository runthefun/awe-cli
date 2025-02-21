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
    Logger.verbose(`querying api ${this.baseUrl}`);
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
    });

    const result = await response.json();
    if (result.type === "Error") {
      throw new Error(result.error);
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

  async fetchTypes() {
    //
    const typefiles = {
      "awe-scripting.d.ts": "oo-scripting.d.ts",
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
    return result;
  }
}
