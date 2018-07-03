# :package: base

A Webpack 4 static starter stack for web development.

## Installation

1. `git clone https://github.com/loreina/base.git`
2. `rm -rf .git` to remove this repo
3. `git init` to init your own repo
4. `yarn install`

## Usage

**Development**   

`yarn dev`
- Build app (HMR enabled)
- Served at `localhost:7000`

**Production**    

`yarn build`
- Build app (HMR disabled)
- Build `src/` files to `dist/` folder

**Startup**    

`yarn start`
- Build app and files (HMR disabled)
- Served at `localhost:9000`

**All Commands**    

Command | Description
--- | ---
`yarn build` | Build app (HMR disabled) and build `src/` files to `dist/` folder
`yarn dev` | Build app (HMR enabled) and serve at `localhost:7000`
`yarn start` | Build app and files (HMR disabled) and serve at `localhost:9000`
`yarn test` | Run JS and SCSS linting