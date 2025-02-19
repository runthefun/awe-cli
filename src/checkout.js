import path from "path";
import {
  getGameId,
  ensureDir,
  ensureJSON,
  copyDir,
  writeFile,
} from "./utils.js";
import { DEF_PACKAGE_JSON, DEF_TSCONFIG } from "./contants.js";
import { fileURLToPath } from "url";
import { syncDown } from "./sync.js";
import { login } from "./login.js";
import { ApiClient } from "./api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(process.cwd(), "src");
const aweDir = path.join(srcDir, "@awe");

export async function checkout(opts = {}) {
  //
  await login();

  const gameId = opts.gameId ?? (await getGameId());

  if (!gameId) {
    throw new Error("No game ID found in package.json metadata");
  }

  // Create src directory if it doesn't exist
  await ensurePackageJson(gameId);
  await ensureTSConfig(gameId);

  await fetchTypes();
  await syncDown({ gameId });

  console.log("Sync completed successfully!");

  // Run npm install in the target directory
  console.log("Installing dependencies...");
  const { execSync } = await import("child_process");
  execSync("npm install", { stdio: "inherit" });
}

async function ensurePackageJson(gameId, updateFn = null) {
  //
  let json = await ensureJSON(
    path.join(process.cwd(), "package.json"),
    DEF_PACKAGE_JSON,
    (json, template) => {
      json.awe ??= {};
      json.awe.gameId = gameId;
      json.dependencies ??= {};
      for (const [key, value] of Object.entries(template.dependencies)) {
        json.dependencies[key] ??= value;
      }
      if (updateFn) {
        json = updateFn(json, template) ?? json;
      }
      return json;
    }
  );

  return json;
}

export async function ensureTSConfig(gameId, updateFn = null) {
  //
  let json = await ensureJSON(
    path.join(process.cwd(), "tsconfig.json"),
    DEF_TSCONFIG,
    (json, template) => {
      json.compilerOptions ??= {};
      json.compilerOptions.baseUrl = "./src";
      json.compilerOptions.paths ??= {};
      json.compilerOptions.paths = {
        ...template.compilerOptions.paths,
        ...(json.compilerOptions.paths ?? {}),
      };
      json.include ??= [];
      json.include ??= [];
      if (!json.include.includes("src/**/*")) {
        json.include.push("src/**/*");
      }
      return json;
    }
  );

  return json;
}

async function fetchTypes() {
  //
  const types = await ApiClient.instance.fetchTypes();
  for (const [dest, content] of Object.entries(types)) {
    writeFile(path.join(aweDir, dest), content);
  }
}
