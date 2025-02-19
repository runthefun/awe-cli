#!/usr/bin/env node

import { Command } from "commander";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { ApiClient } from "./api.js";
import { syncUp } from "./sync.js";
import { checkout } from "./checkout.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiClient = new ApiClient();

function isLocalScript(data) {
  return data.kit === "local" && data.uri.startsWith("./");
}

async function createProject(data, targetDir) {
  // Copy template files
  const templateDir = path.join(__dirname, "..", "template");
  await fs.copy(templateDir, targetDir);

  // Update package.json with game data
  const packageJsonPath = path.join(targetDir, "package.json");
  const packageJson = await fs.readJson(packageJsonPath);
  packageJson.metadata = {
    awe: { gameId: data.gameId },
  };
  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

  // Create src directory if it doesn't exist
  const srcDir = path.join(targetDir, "src");
  await fs.ensureDir(srcDir);

  // Write game files
  for (const file of data.scripts) {
    let uri = file.uri;
    // for now only local scripts are supported
    if (!isLocalScript(file)) {
      continue;
    }
    // complete with default extension tsx if missing (js, ts, jsx, tsx)
    const extensions = [".js", ".ts", ".jsx", ".tsx"];
    const extension = extensions.find((ext) => uri.endsWith(ext));
    if (!extension) {
      uri += ".tsx";
    }
    const filePath = path.join(srcDir, uri);
    await fs.writeFile(filePath, file.code);
  }

  // Run npm install in the target directory
  console.log("Installing dependencies...");
  const { execSync } = await import("child_process");
  execSync("npm install", { stdio: "inherit", cwd: targetDir });
}

const program = new Command();

program.name("awe").description("CLI tool to fetch and create game projects");

program
  .command("checkout")
  .argument("<gameId>", "ID of the game to checkout")
  .action(async (gameId, options) => {
    try {
      console.log(`Checking out game ${gameId}...`);
      await checkout({ gameId });
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

program
  .command("push")
  .description("Push local changes to remote game")
  .action(async (options) => {
    try {
      await syncUp();
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

program.parse();
