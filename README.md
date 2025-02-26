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

# Available commands

- `npm run start` to start the development server. This will automatically sync the local scripts. It will also open the awe.box studio in your default browser.
- `npm run watch` to watch for changes and push them to the remote game
- `npm run push` to manually push changes to the remote game
- `npm run login` to manually login to the AWE platform (this is automatically done when you run one of the above commands)
- `npm run logout` to logout from the AWE platform

[npm]: https://img.shields.io/npm/v/awe-cli
[npm-url]: https://www.npmjs.com/package/awe-cli
