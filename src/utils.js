import { ApiClient } from "./api.js";
import fs from "fs-extra";
import path from "path";
import os from "os";
import ts from "typescript";

export const SRC_DIR = path.join(process.cwd(), "src");

export const ALLOWED_EXTS = [".js", ".ts", ".jsx", ".tsx"];

export function copyDir(src, dest) {
  return fs.copy(src, dest);
}

export async function writeFile(filePath, content) {
  // ensure dir
  console.log("writing file", filePath);
  const dir = path.dirname(filePath);
  await ensureDir(dir);
  return fs.writeFile(filePath, content);
}

export async function getGameId() {
  const packageJson = JSON.parse(await fs.readFile("package.json", "utf-8"));
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

export async function getLocalScripts() {
  const files = await readDirRecursive(SRC_DIR);
  const res = {};
  for (const file of files) {
    // restrict to allowed extensions
    if (
      file.endsWith(".d.ts") ||
      !ALLOWED_EXTS.some((ext) => file.endsWith(ext))
    ) {
      continue;
    }
    const uri = pathToRemoteUri(file);
    res[uri] = file;
  }
  return res;
}

export async function getRemoteScripts(opts = {}) {
  const gameId = opts.gameId ?? (await getGameId());
  const data = await ApiClient.instance.getScripts(gameId);
  console.log(
    "getRemoteScripts",
    data.scripts.map((s) => s.uri + ": " + s.kit).join("\n")
  );
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
export function pathToRemoteUri(filePath) {
  const relativePath = path.relative(SRC_DIR, filePath);
  let uri = "./" + relativePath.split(path.sep).join("/");
  // remove ts, js, tsx, jsx
  // replace ./@awe with @awe
  uri = uri.replace(/\.(ts|js|tsx|jsx)$/, "").replace(/^\.\/@awe/, "@awe");

  return uri;
}

export function remoteUriToPath(uri) {
  let relativePath = ensureExtension(uri);
  return path.join(SRC_DIR, relativePath);
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

export function getEmit(filename) {
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
