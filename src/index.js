#!/usr/bin/env node

// @ts-check

import { Command } from "commander";
import { syncUp } from "./sync.js";
import { checkout } from "./checkout.js";
import { watch } from "./watch.js";
import { start } from "./start.js";
import { Logger } from "./logger.js";
import chalk from "chalk";
import { getGameId } from "./utils.js";
import { login, logout } from "./login.js";
const program = new Command();

program.name("awe").description("CLI tool to fetch and create game projects");

program
  .command("checkout")
  .argument("<gameId>", "ID of the game to checkout")
  .action(async (gameId) => {
    try {
      //
      Logger.headline(`Checking out game ${chalk.cyan(gameId)}...`);
      await checkout({ gameId });
      Logger.success("Checkout completed");
    } catch (error) {
      Logger.error(error);
      process.exit(1);
    }
  });

program
  .command("push")
  .description("Push local changes to remote game")
  .action(async () => {
    try {
      //
      const gameId = await getGameId();
      if (!gameId) {
        Logger.error("No game ID found");
        process.exit(1);
      }
      Logger.withSpinner(
        `Syncing local changes to remote game ${chalk.cyan(gameId)}...`,
        async () => {
          await syncUp();
        }
      );
    } catch (error) {
      Logger.error(error);
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
    const gameId = await getGameId();
    if (!gameId) {
      Logger.error("No game ID found");
      process.exit(1);
    }
    watch({ syncDelay: opts.interval });
  });

program
  .command("start")
  .description("Start the development server")
  .action(async () => {
    //
    const gameId = await getGameId();
    if (!gameId) {
      Logger.error("No game ID found");
      process.exit(1);
    }
    Logger.headline("Starting development server...");
    await start();
  });

program
  .command("login")
  .description("Login to the AWE platform")
  .action(async () => {
    await login();
  });

program
  .command("logout")
  .description("Logout from the AWE platform")
  .action(async () => {
    await logout();
  });

program.parse();
