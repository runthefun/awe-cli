#!/usr/bin/env node

import { Command } from "commander";
import { fileURLToPath } from "url";
import { syncUp } from "./sync.js";
import { checkout } from "./checkout.js";
import { watchScripts } from "./watch.js";

const __filename = fileURLToPath(import.meta.url);

const program = new Command();

program.name("awe").description("CLI tool to fetch and create game projects");

program
  .command("checkout")
  .argument("<gameId>", "ID of the game to checkout")
  .action(async (gameId) => {
    try {
      console.log(`Checking out game ${gameId}...`);
      await checkout({ gameId });
    } catch (error) {
      console.error("Error:", error);
      process.exit(1);
    }
  });

program
  .command("push")
  .description("Push local changes to remote game")
  .action(async () => {
    try {
      await syncUp();
    } catch (error) {
      console.error("Error:", error);
      process.exit(1);
    }
  });

program
  .command("watch")
  .description("Watch for file changes and push local changes to remote game")
  .action(async () => {
    try {
      watchScripts();
      console.log("after watch");
    } catch (error) {
      console.error("Error:", error);
      process.exit(1);
    }
  });

program.parse();
