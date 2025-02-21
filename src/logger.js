import ora from "ora";
import chalk from "chalk";

export const LOG_LEVEL = {
  SILENT: 0,
  VERBOSE: 1,
  DEBUG: 2,
};

export class Logger {
  //
  static _level = LOG_LEVEL.SILENT;

  static _indent = 0;

  static setLevel(level) {
    Logger._level = level;
  }

  static indent() {
    Logger._indent++;
  }

  static dedent() {
    Logger._indent--;
  }

  static _indentString() {
    return "  ".repeat(Logger._indent);
  }

  static log(message) {
    console.log(Logger._indentString() + message);
  }

  static verbose(message) {
    if (Logger._level >= LOG_LEVEL.VERBOSE) {
      console.log(chalk.dim(Logger._indentString() + message));
    }
  }

  static debug(message) {
    if (Logger._level >= LOG_LEVEL.DEBUG) {
      console.log(chalk.dim(Logger._indentString() + message));
    }
  }

  static error(err) {
    console.log(
      chalk.red(
        Logger._indentString() +
          `[Error]: ${err instanceof Error ? err.message : err}`
      )
    );
  }

  static spinner(message = "") {
    return ora({
      text: message,
      color: "blue",
    });
  }

  static async withSpinner(message, fn) {
    const spinner = ora({
      text: message,
      color: "blue",
    }).start();

    try {
      const res = await fn(spinner);
      spinner.succeed();
      return res;
    } catch (error) {
      spinner.fail(error.message);
      throw error;
    }
  }

  static headline(message) {
    console.log("\n" + chalk.blue.bold(message));
    console.log(chalk.dim("─".repeat(50)) + "\n");
  }

  static success(message) {
    console.log("\n" + chalk.green.bold(`✨ ${message}`) + "\n");
  }

  static info(message) {
    console.log(chalk.blue(message));
  }
}
