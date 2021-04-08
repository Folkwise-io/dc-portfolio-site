import { Knex } from "knex";

const { User } = require('../../server/models');

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(User.tableName).del();
    
    //User information
    const users = [
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
      {
        username: 'second-user!',
        password: 'different-password',
        email: 'second-user@email.com',
      },
    ]

    //Sends seed file to method within users to create instances
    await Promise.all(users.map(( user => User.create(user))))
};
