# React Lambda Forms

Building forms can be a pain. First you have to build the actual form fields; then the buttons; then handle the state of the form; handle the submission; write validation on the client and then write more validation on the server.

This repository shows you how you can build forms with a [simple configuration file](packages/shared/config/contact.js), and use the same configuration file and validation code on both the client and the server side.

On the client side, we're using React Hooks to manage the state of the form; while on the server side we're using a NodeJS Lambda; all packed in to a tidy monorepo.

I hope this helps you to make your forms less painful.

## Tech Stack

* React (+ Hooks)
* ES6 (Babel)
* NodeJS
* Serverless (Lambda)
* SCSS modules
* Jest
* Webpack

## Getting Started

To start, you'll need to have the following software installed:

- [Node.js](https://nodejs.org) (v10.x for Lambda support)
- [Yarn](https://yarnpkg.com) package manager
- [Serverless](https://serverless.com/) framework - `yarn global add serverless`

`yarn install` once from the root and yarn will install the required node_modules for every package.

### API

To run the API, navigate to the `packages/api` directory and run the following:

- `sls offline` to run the Lambda offline

### Client

To run the client, navigate to the `packages/client` directory and run the following:

- `yarn start` to start a local server, it'll launch the site so you can start to play around
