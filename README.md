# Lerna & Yarn Monorepo Starter (WIP)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

## Description

A basic monorepo managed with [Lerna](https://lernajs.io/) and [Yarn](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) workspaces.
Inspired by this [Medium](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91) post by David Barral, and theoretically extensible to other projects.
This repo is a **work in progress**, but the eventual goal is to create a scalable, framework-agnostic template for monorepos.

For those unfamiliar with Lerna, modular components are referred to as packages.

At the moment, the project is comprised of:

* [client](`packages/client`) - React, Webpack
* [server](`packages/server`) - Express, Winston server
* [tools](`packages/tools`) - Shared tooling/configurations
* [hub](`packages/hub`) - A `package.json` listing the other packages as dependencies
* [scripts](`scripts/`) Shell and npm scripts (and sym-links) for CI/CD

All shared tooling and configurations are contained in `packages/tools`.
At the moment, this includes settings for:
* Babel v7 (Stage 2, React)
* ESLint v5 (Airbnb and Prettier)
* Jest v23
* Prettier v1

## Requirements

[Lerna](https://lernajs.io)
```
npm i -g lerna
```
[Yarn](https://yarnpkg.com/) - follow the installation instructions for your OS [here](https://yarnpkg.com/lang/en/docs/install).
 **Make sure yarn workspaces are enabled!**
```
yarn config set workspaces-experimental true
```

## How To Use It

<!-- [Lerna Commands](https://github.com/lerna/lerna#readme) -->

Have Lerna install dependencies and link the various packages to one another.
```
lerna bootstrap
```
<!-- lerna link -->
After the packages have finished installing, you can selectively run different parts of the project.

#### Run all packages simultaneously

Runs all package.json scripts with the name `dev`

From the project root directory:
```
yarn run dev
```
From anywhere in the project:
```
lerna run dev --parallel --no-bail
```

#### Run a specific package:
From the project root directory:
```
yarn run client:dev
```
From anywhere in the project:
```
lerna run client:dev --no-bail
```

#### Add a dependency to a package

```
lerna add <dependency_name> --scope <package_name>
```

#### Add a dependency shared between multiple packages


#### Add Shared Tooling to a Package

To make webpack a shared dependency, add webpack to `packages/tools`:
```
lerna add webpack --scope tools
```

`packages/tools/package.json` would now look something like this:
```js
// packages/tools/package.json
"name": "tools",
"version": "1.0.0",
"dependencies": {
  "webpack": "^4.24.0",
}
```

Write `"tools": "1.0.0"` as a dependency wherever a project needs it:
```js
// packages/client/package.json
"dependencies": {
  "tools": "1.0.0"
}
```

Run `lerna link` to link the packages together.

### Importing and Exporting Configurations

Shared configurations are defined in `packages/tools/`

```js
// packages/tools/eslint.config.js
module.exports = {
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"],
  }
}
```

They can then be imported into any other package like so:
```js
// packages/client/eslint.config.js
module.exports = require('tools/eslint.config.js');
```

## Project Directory Structure:
```
├── .editorconfig
├── .gitignore
├── lerna.json
├── package.json
├── packages
│   ├── client
│   │   ├── babel.config.js
│   │   ├── .browserslistrc
│   │   ├── dist
│   │   │   ├── index.html
│   │   ├── eslint.config.js
│   │   ├── jest.config.js
│   │   ├── package.json
│   │   ├── prettier.config.js
│   │   ├── src
│   │   │   └── index.jsx
│   │   ├── task -> ../../scripts/task
│   │   └── webpack.config.js
│   ├── hub
│   │   ├── package.json
│   │   └── task -> ../../scripts/task
│   ├── server
│   │   ├── babel.config.js
│   │   ├── eslint.config.js
│   │   ├── jest.config.js
│   │   ├── package.json
│   │   ├── prettier.config.js
│   │   ├── src
│   │   │   ├── index.js
│   │   │   └── server.js
│   │   └── task -> ../../scripts/task
│   └── tools
│       ├── babel.config.js
│       ├── eslint.config.js
│       ├── jest.config.js
│       ├── package.json
│       ├── prettier.config.js
│       └── task -> ../../scripts/task
├── README.md
├── scripts
│   ├── publish
│   └── task
└── yarn.lock
```



<!-- ## Testing -->

## Built With
* [Lerna](https://lernajs.io/)
* [Yarn](https://yarnpkg.com/)
* [ESLint](https://ESLint.org/)

### Author

* **Charles Hufnagel** - [chufnagel](https://github.com/chufnagel)

### License

This project is licensed under the GPLv3 - see the [LICENSE.md](LICENSE.md) file for more details.

### Acknowledgements

* Credit to David Barral for the original [Medium](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91) post!

