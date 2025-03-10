// @ts-check

import { execSync } from "child_process";
import path from "path";
import {
  getGameId,
  ensureJSON,
  writeFile,
  ensureGitRepo,
  ensureDir,
} from "./utils.js";
import { DEF_PACKAGE_JSON, DEF_TSCONFIG } from "./contants.js";
import { syncDown } from "./sync.js";
import { login } from "./login.js";
import { ApiClient } from "./api.js";
import { Logger } from "./logger.js";

export async function checkout(opts = {}) {
  //
  const workDir = opts.workDir ?? process.cwd();

  // Update directory references
  const srcDir = path.join(workDir, "src");
  const aweDir = path.join(workDir, ".awe");

  await Logger.withSpinner("Logging in...", async () => {
    await login();
  });

  const currentGameId = await getGameId(workDir);

  let gameId = opts.gameId ?? currentGameId;

  if (!gameId) {
    //
    gameId = await Logger.withSpinner(
      "Getting current game ID...",
      async () => {
        return await ApiClient.instance.getCurrentGameId();
      }
    );

    if (!gameId) {
      throw new Error("Could not determine current game ID");
    }
  }

  if (currentGameId && gameId !== currentGameId) {
    throw new Error("Game ID mismatch between package.json and command line");
  }

  // Create src directory if it doesn't exist
  await Logger.withSpinner("Initializing repo...", async () => {
    await ensureDir(workDir);
    await ensureDir(srcDir);
    await ensureGitRepo(workDir);
    await ensurePackageJson(gameId, null, workDir);
    await ensureTSConfig(gameId, null, workDir);
    await fetchTypes(aweDir);
  });

  await Logger.withSpinner("Syncing game scripts...", async () => {
    await syncDown({ gameId, dir: workDir });
  });

  console.log("\n\nInstalling dependencies...");
  execSync("npm install", { stdio: "inherit", cwd: workDir });
}

async function ensurePackageJson(gameId, updateFn, workDir = process.cwd()) {
  let json = await ensureJSON(
    path.join(workDir, "package.json"),
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

export async function ensureTSConfig(
  gameId,
  updateFn = null,
  workDir = process.cwd()
) {
  let json = await ensureJSON(
    path.join(workDir, "tsconfig.json"),
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

async function fetchTypes(aweDir) {
  const types = await ApiClient.instance.fetchTypes();
  for (const [dest, content] of Object.entries(types)) {
    await writeFile(path.join(aweDir, dest), content);
  }
}
