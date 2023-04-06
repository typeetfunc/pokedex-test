# Marlow PokeDex

## Stack

Project builded by:

 - lerna
 - react
 - next.js
 - typescript
 - storybook

Project uses different `tsconfig` for dev and build envs, for better `typescript` code navigation. Inspired by [article](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559) about lerna and typescript caveats.

## Packages

 - pokedex: main `next.js` app
 - components: reusable components for `pokedex` app
 - utils: reusable pure functions and types for `pokedex` app and `components`


## Available Scripts

> Note: Project uses [Yarn](https://yarnpkg.com/getting-started/install). Please, install it before using.

Before start you need install dependencies by `yarn install`

In the project directory, you can run:

### `yarn run pokedex:dev`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `dist` folders.

### `yarn run components:storybook`

Start `storybook` dev server for `components` package

### `yarn run lint`

Run `eslint` over packages

### `yarn run prettier`

Re-format source code at packages

### `yarn run docker:build`

Build docker image for pokedex app

### `yarn run docker:run`

Run builded docker image. Run only after building image by `docker:build` command


