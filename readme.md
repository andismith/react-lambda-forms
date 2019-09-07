# React Lambda Forms

This repository is a monorepo.

## Getting Started

To start, you'll need to have the following software installed:

- [Node.js](https://nodejs.org) (v10.x for Lambda support)
- [Yarn](https://yarnpkg.com) package manager
- [Serverless](https://serverless.com/) framework - `yarn global add serverless`

`yarn install` from the root to install the required node_modules in every package.

### API

To run the API, navigate to the `packages/api` directory and run the following:

- `sls offline` to run the Lambda offline

### Client

To run the client, navigate to the `packages/client` directory and run the following:

- `yarn start` to start a local server
