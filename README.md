## Features

- React >16.4
- Webpack 4
- Babel
- ESLint enabled (see instructions below for set-up)

## Installation

-`npm i`

### Installing ESLint

If you don't have ESLint already install, you can install ESLint and the required dependencies with:
`npm i -g eslint eslint-config-airbnb eslint-plugin-node babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`

### FrontEnd Only Development

- Start Webpack Dev Server with `npm run frontend`
- visit `http://localhost:8080/`

### Fullstack Development

- Start Webpack with `npm run dev`
- Start nodemon with `npm run start-dev`
- visit `http://localhost:3000/`
- edit your database connection details and delete the database file you're **not** using
