# awe-cli

[![NPM Package][npm]][npm-url]

A command-line tool that enables local development of game scripts for [awe.box](https://awe.box) games, allowing you to use your preferred code editor while automatically syncing changes with the awe.box platform.

# Development Workflow

1. Optionally, create a new game in [awe.box](https://awe.box/studio) website if you don't have one yet.

2. _In your local project directory_, run

```bash
npx awe-cli checkout <gameId>
```

3. Run

```bash
npm run start
```

to start the development server.

# Available Commands

### Development Server

```bash
npm run start
```

Starts the development server, automatically syncs local scripts, and opens the awe.box studio in your default browser.

### Watch Mode

```bash
npm run watch
```

Watches for local changes and automatically pushes them to the remote game.

### Manual Sync

```bash
npm run push
```

Manually pushes local changes to the remote game.

### Authentication

```bash
npm run login    # Login to AWE platform (automatic when running other commands)
npm run logout   # Logout from AWE platform
```

[npm]: https://img.shields.io/npm/v/awe-cli
[npm-url]: https://www.npmjs.com/package/awe-cli
