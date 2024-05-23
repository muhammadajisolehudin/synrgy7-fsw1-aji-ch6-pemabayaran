import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { role: "admin", email: "admin1@mail.com", password: "12345678", name: "admin satu" },
        { role: "customer", email: "customer@mail.com", password: "12345678", name: "customer satu" }
    ]);
};
