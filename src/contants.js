export const AWE_SITE = "http://localhost:3000";

const TYPINGS_PATH = "./@awe/awe-scripting.d.ts";

export const DEF_TSCONFIG = {
  compilerOptions: {
    target: "ES2020",
    module: "ES2020",
    moduleResolution: "node",
    esModuleInterop: true,
    strict: true,
    outDir: "dist",
    rootDir: "src",
    checkJs: true,
    allowJs: true,
    sourceMap: true,
    declaration: true,
    skipLibCheck: true,
    jsx: "react",
    baseUrl: "./src",
    paths: {
      "@oo/scripting": [TYPINGS_PATH],
      "@awe/scripting": [TYPINGS_PATH],
      "@oncyber/*": ["@awe/*"],
    },
  },
  include: ["src/**/*"],
  exclude: ["node_modules", "dist"],
};

export const DEF_PACKAGE_JSON = {
  name: "game-project",
  version: "1.0.0",
  description: "Game project created with awe-cli",
  type: "module",
  scripts: {
    watch: "awe-cli watch",
    push: "awe-cli push",
  },
  dependencies: {
    three: "0.160.0",
    "@dimforge/rapier3d": "0.11.2",
    react: "^18",
    "react-dom": "^18",
    ethers: "6.13.3",
    animejs: "^3.2.1",
  },
  devDependencies: {
    "@types/node": "^20.11.19",
    typescript: "^5.3.3",
    chokidar: "^3.5.3",
    "@types/three": "^0.173.0",
    "@types/react": "^18",
    // "awe-cli": "^1",
  },
};
