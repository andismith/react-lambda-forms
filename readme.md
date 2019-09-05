# React Lambda Forms

This repository is a monorepo.

## Getting Started

To start, you'll need to have the following software installed:

* [Node.js](https://nodejs.org) (v10.x for Lambda support)
* [Yarn](https://yarnpkg.com) package manager
* [Serverless](https://serverless.com/) framework - `yarn global add serverless`

### API

To run the API, navigate to the `packages/api` directory and run the following:

* `yarn install` to install the required node_modules
* `sls offline` to run the Lambda offline

### Client

To run the client, navigate to the `packages/client` directory and run the following:

* `yarn install` to install the required node_modules
* `yarn start` to start a local server
