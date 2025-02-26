// @ts-check

// export const AWE_SITE = "http://localhost:3000";
export const AWE_SITE = "https://oo-git-awe-cli-oncyber.vercel.app";

const TYPINGS_PATH = ".awe/awe-scripting.d.ts";

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
      "@oo/scripting": [`../${TYPINGS_PATH}`],
      "@awe/scripting": [`../${TYPINGS_PATH}`],
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
    login: "awe-cli login",
    logout: "awe-cli logout",
    watch: "awe-cli watch",
    push: "awe-cli push",
    start: "awe-cli start",
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
    "awe-cli": "latest",
  },
};

export const DEF_GIT_IGNORE = `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# next.js build output
.next

# compiled modules
cjs/
es/
dist/

# vscode settings
.vscode
`;
