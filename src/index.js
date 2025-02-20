#!/usr/bin/env node

// @ts-check

import { Command } from "commander";
import { fileURLToPath } from "url";
import { syncUp } from "./sync.js";
import { checkout } from "./checkout.js";
import { watch } from "./watch.js";
import { start } from "./start.js";

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
      console.log("Syncing local changes to remote game...");
      await syncUp();
      console.log("Sync completed");
    } catch (error) {
      console.error("Error:", error);
      process.exit(1);
    }
  });

program
  .command("watch")
  // debounce in ms
  .option("-d, --debounce <debounce>", "Debounce interval in ms")
  .description("Watch for file changes and push local changes to remote game")
  .action(async (opts) => {
    //
    watch({ syncDelay: opts.interval });
  });

program
  .command("start")
  .description("Start the game in development mode")
  .action(async () => {
    await start();
  });

program.parse();
