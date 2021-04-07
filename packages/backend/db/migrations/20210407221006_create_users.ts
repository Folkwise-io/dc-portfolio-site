import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary().unsigned()
    t.string('username').unique().index()
    t.string('password')
    t.string('email').unique().index()
    t.timestamp('completed_at')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}

