# Portfolio Maker

## Structure of the project

This project is a monorepo.

## Important Scripts

All scripts can be run from the root.

### Starting Servers

`yarn dev` from the root will run frontend + backend with hot reload.

### Populating DB

`yarn db:init` : Creates the database and runs first migration to pull in new models (will be initally empty)
`yarn db:seed` : Populates the tables with seed data
`yarn db:migrate` : Runs another migration in case you add another table

### Updating Table -Need to be in backend-
`yarn knex migrate:make __migration-name__` : creates new migration template ts file
`yarn knex seed:make __seed-name__` : creates new template seed ts file 

## Requirements

- Node
- Yarn (can be installed using `npm install -g yarn`)

## Cors
We have cors within the backend disabled right now, but we need to enable it when deploying. It could be a secure risk.
```
const corsOptions ={
  origin:'http://localhost:4000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

```
