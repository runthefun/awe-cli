// @ts-check

import { execSync } from "child_process";
import path from "path";
import { getGameId, ensureJSON, writeFile, ensureGitRepo } from "./utils.js";
import { DEF_PACKAGE_JSON, DEF_TSCONFIG } from "./contants.js";
import { syncDown } from "./sync.js";
import { login } from "./login.js";
import { ApiClient } from "./api.js";
import { Logger } from "./logger.js";
const srcDir = path.join(process.cwd(), "src");
const aweDir = path.join(srcDir, "@awe");

export async function checkout(opts = {}) {
  //
  await Logger.withSpinner("Logging in...", async () => {
    await login();
  });

  const currentGameId = await getGameId();

  let gameId = opts.gameId ?? currentGameId;

  if (!gameId) {
    throw new Error("No game ID provided");
  }

  if (currentGameId && gameId !== currentGameId) {
    throw new Error("Game ID mismatch between package.json and command line");
  }

  // Create src directory if it doesn't exist
  await Logger.withSpinner("Initializing repo...", async () => {
    await ensureGitRepo();
    await ensurePackageJson(gameId);
    await ensureTSConfig(gameId);
    await fetchTypes();
  });

  await Logger.withSpinner("Syncing game scripts...", async () => {
    await syncDown({ gameId });
  });

  console.log("\n\nInstalling dependencies...");
  execSync("npm install", { stdio: "inherit" });
}

async function ensurePackageJson(gameId, updateFn) {
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
    await writeFile(path.join(aweDir, dest), content);
  }
}
