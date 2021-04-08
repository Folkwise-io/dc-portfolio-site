# Portfolio Maker

## Structure of the project

This project is a monorepo.

## Important Scripts

All scripts can be run from the root.

### Starting Servers

`yarn dev` from the root will run frontend + backend with hot reload.

### Populating DB

yarn db-init : Creates the database and runs first migration to pull in new models (will be initally empty)
yarn db-seed : Populates the tables with seed data
yarn db-migrate : Runs another migration in case you add another table

## Requirements

- Node
- Yarn (can be installed using `npm install -g yarn`)
