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
import path from "path";
import { ApiClient } from "./api.js";
const program = new Command();

program.name("awe").description("CLI tool to fetch and create game projects");

program
  .command("checkout")
  .argument("[gameId]", "ID of the game to checkout (defaults to current game)")
  .option(
    "-d, --dir <directory>",
    "Directory to checkout into (defaults to current directory)"
  )
  .action(async (gameId, opts) => {
    try {
      const workDir = opts.dir ? path.resolve(opts.dir) : process.cwd();

      Logger.headline(
        `Checking out ${
          gameId ? `game ${chalk.cyan(gameId)}` : "current user game"
        }...`
      );
      await checkout({ gameId, workDir });
      Logger.success("Checkout completed");
      Logger.info("Run `npm run start` to start the development server");
    } catch (error) {
      Logger.error(error);
      process.exit(1);
    }
  });

program
  .command("create")
  .option("-t, --title <title>", "Title of the game")
  .option(
    "-d, --dir <directory>",
    "Directory to create the game in (defaults to current directory)"
  )
  .option("-v, --vibe", "Create game in vibe mode")
  .action(async (opts) => {
    try {
      const workDir = opts.dir ? path.resolve(opts.dir) : process.cwd();
      const title = opts.title || "My Game";
      let mode = opts.vibe ? "vibe" : "default";
      Logger.headline(
        `${
          mode === "vibe" ? "Vibing new game" : "Creating new game"
        } ${chalk.cyan(title)}...`
      );
      const gameId = await Logger.withSpinner(
        `Creating game ${chalk.cyan(title)}...`,
        async () => {
          return await ApiClient.instance.createGame({
            title,
            mode,
          });
        }
      );
      await checkout({ gameId, workDir, mode });
      Logger.success("Game created");
      Logger.info("Run `npm run start` to start the development server");
    } catch (error) {
      Logger.error(error);
      process.exit(1);
    }
  });

program
  .command("push")
  .option(
    "-d, --dir <directory>",
    "Directory to push changes from (defaults to current directory)"
  )
  .description("Push local changes to remote game")
  .action(async (opts) => {
    try {
      //
      const workDir = opts.dir ? path.resolve(opts.dir) : process.cwd();
      const gameId = await getGameId(workDir);
      if (!gameId) {
        Logger.error("No game ID found");
        process.exit(1);
      }
      Logger.withSpinner(
        `Syncing local changes to remote game ${chalk.cyan(gameId)}...`,
        async () => {
          await syncUp({ dir: opts.dir });
        }
      );
    } catch (error) {
      Logger.error(error.cause || error.message);
      process.exit(1);
    }
  });

program
  .command("watch")
  .description("Watch for file changes and push local changes to remote game")
  .action(async (opts) => {
    //
    const gameId = await getGameId();
    if (!gameId) {
      Logger.error("No game ID found");
      process.exit(1);
    }
    watch();
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
