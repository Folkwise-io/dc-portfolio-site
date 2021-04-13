import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("counter").del();

    // Inserts seed entries
    await knex("counter").insert([
        { id: 1, counter: 1 },
        { id: 2, counter: 2 },
        { id: 3, counter: 3 },
    ]);
};
