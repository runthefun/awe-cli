// @ts-check

import { ApiClient } from "./api.js";
import fs from "fs-extra";
import path from "path";
import os from "os";
import ts from "typescript";
import { exec, execSync } from "child_process";
import { DEF_GIT_IGNORE } from "./contants.js";
import { Logger } from "./logger.js";
import chalk from "chalk";

export function getSrcDir(workDir = process.cwd()) {
  return path.join(workDir, "src");
}

export const ALLOWED_EXTS = [".js", ".ts", ".jsx", ".tsx"];

export function isAllowedExt(filePath) {
  return (
    !filePath.endsWith(".d.ts") &&
    ALLOWED_EXTS.some((ext) => filePath.endsWith(ext))
  );
}

export function copyDir(src, dest) {
  return fs.copy(src, dest);
}

export async function writeFile(filePath, content) {
  // ensure dir
  const dir = path.dirname(filePath);
  await ensureDir(dir);
  return fs.writeFile(filePath, content, "utf-8");
}

export async function getGameId(workDir = process.cwd()) {
  const packageJson = await readJSON(path.join(workDir, "package.json"));
  return packageJson?.awe?.gameId;
}

// Recursively ensure directory exists
export async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
}

// Recursively read directory
export async function readDirRecursive(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await readDirRecursive(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

export async function getLocalScripts(workDir = process.cwd()) {
  const srcDir = getSrcDir(workDir);
  const files = await readDirRecursive(srcDir);
  const res = {};
  for (const file of files) {
    // restrict to allowed extensions
    if (!isAllowedExt(file)) {
      continue;
    }
    const uri = pathToRemoteUri(file, workDir);
    res[uri] = file;
  }
  return res;
}

export async function getRemoteScripts(opts = {}) {
  const gameId = opts.gameId ?? (await getGameId());
  const data = await ApiClient.instance.getScripts(gameId);

  const res = {};
  for (const file of data.scripts) {
    const uri = file.uri;
    res[uri] = file;
  }
  return res;
}

export function ensureExtension(uri) {
  const extension = ALLOWED_EXTS.find((ext) => uri.endsWith(ext));
  if (!extension) {
    uri += ".tsx";
  }
  return uri;
}

// Get relative uri for a file path
export function pathToRemoteUri(filePath, workDir = process.cwd()) {
  const srcDir = getSrcDir(workDir);
  const relativePath = path.relative(srcDir, filePath);
  let uri = "./" + relativePath.split(path.sep).join("/");
  // remove ts, js, tsx, jsx
  // replace ./@awe with @awe
  uri = uri.replace(/\.(ts|js|tsx|jsx)$/, "").replace(/^\.\/@awe/, "@awe");

  return uri;
}

export function remoteUriToPath(uri, workDir = process.cwd()) {
  let relativePath = ensureExtension(uri);
  return path.join(getSrcDir(workDir), relativePath);
}

export async function readJSON(filePath) {
  try {
    const json = await fs.readJSON(filePath);
    return json;
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
    return null;
  }
}

export async function writeJSON(filePath, data) {
  await fs.writeJSON(filePath, data, { spaces: 2 });
}

export async function ensureJSON(filePath, template, updateFn) {
  //
  let current = await readJSON(filePath);

  if (!current) {
    current = structuredClone(template);
  }

  if (updateFn) {
    current = updateFn(current, template) ?? current;
  }

  await writeJSON(filePath, current);

  return current;
}

export function getEmit(filename, content) {
  const host = ts.createCompilerHost({});

  let dtsContent = "";
  let jsContent = "";

  // Override writeFile
  host.writeFile = (fileName, text) => {
    if (fileName.endsWith(".d.ts")) {
      dtsContent = text;
    } else if (fileName.endsWith(".js")) {
      jsContent = text;
    }
  };

  if (content) {
    host.readFile = (file) => {
      if (file === filename) {
        return content;
      }
      return ts.sys.readFile(file);
    };

    host.fileExists = (file) => {
      if (file === filename) {
        return true;
      }
      return ts.sys.fileExists(file);
    };
  }

  const program = ts.createProgram(
    [filename],
    {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ESNext,
      allowJs: true,
      moduleResolution: ts.ModuleResolutionKind.Node10,
      jsx: ts.JsxEmit.ReactJSX,
      allowNonTsExtensions: true,
      declaration: true,
      experimentalDecorators: true,
      emitDeclarationOnly: false, // Set to true if you only want .d.ts files
      esModuleInterop: true, // Better interop with ES modules
      skipLibCheck: true, // Speeds up compilation by skipping type checking of declaration files
      isolatedModules: true,
      noEmit: false,
      noEmitOnError: false,
      noResolve: true, //
    },
    host
  );

  program.emit();

  return {
    dts: dtsContent,
    code: jsContent,
  };
}

export const TOKEN_FILE = path.join(os.homedir(), ".aweconfig.json");

export async function getToken() {
  const config = await readJSON(TOKEN_FILE);
  return config?.token;
}

export async function setToken(token) {
  if (!token) {
    throw new Error("Token is required");
  }
  await writeJSON(TOKEN_FILE, { token });
}

export async function deleteToken() {
  await fs.unlink(TOKEN_FILE);
}

//

let urlAlphabet =
  "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

export function nanoid(size = 21) {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0];
  }
  return id;
}

export async function ensureGitRepo(workDir = process.cwd()) {
  const gitDir = path.join(workDir, ".git");

  if (!fs.existsSync(gitDir)) {
    Logger.verbose("Initializing git repository...");
    execSync("git init", { cwd: workDir });
  }

  // add gitignore
  const gitIgnorePath = path.join(workDir, ".gitignore");
  if (!fs.existsSync(gitIgnorePath)) {
    Logger.verbose("Adding gitignore...");
    fs.writeFileSync(gitIgnorePath, DEF_GIT_IGNORE);
  }
}

export function formatPatch(patch) {
  if (patch.op === "add") {
    return chalk.green(patch.data.uri);
  } else if (patch.op === "remove") {
    return chalk.red(patch.data.uri);
  } else {
    return chalk.dim(patch.data.uri);
  }
}

export function getName(uri) {
  if (uri.startsWith("./")) {
    return uri.slice(2);
  }
  return path.basename(uri);
}
