import { Knex } from "knex";

const { User } = require('../../server/models');

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(User.tableName).del();

    // Inserts seed entries
    await knex(User.tableName).insert([
        {
          username: 'admin',
          password: 'password',
          email: 'admin@email.com',
        },
        {
          username: 'first-user',
          password: 'another-password',
          email: 'first-user@email.com',
        },
      ]);
};
