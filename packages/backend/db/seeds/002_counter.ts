import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("counter").del();

    // Inserts seed entries
    await knex("counter").insert([
        { id: 1, counter: 1 },
    ]);
};
