# Portfolio Maker

## Structure of the project

This project is a monorepo.

## Important Scripts

### Starting Servers
yarn start-backend : runs the backend server with Nodemon for hot refreshes 
yarn start-frontend : runs the frontend server with Nodemon for hot refreshes
yarn dev : runs all workspaces once

### Populating DB
yarn db-init : Creates the database and runs first migration to pull in new models (will be initally empty)
yarn db-seed : Populates the tables with seed data
yarn db-migrate : Runs another migration in case you add another table


## Requirements

- Node
- Yarn
