'use strict'
require("ts-node/register")
// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
    client: 'pg',
    connection: 'postgres://localhost:5432/dc-portfolio-site',
    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      directory: `${ __dirname }/db/seeds`
    },
    timezone: 'UTC'
}