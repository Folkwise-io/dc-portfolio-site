import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('counter', t => {
    t.increments('id').primary().unsigned()
    t.integer('counter').defaultTo(0).notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('counter')
}

