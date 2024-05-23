import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("bill_types").del();

    // Inserts seed entries
    await knex("bill_types").insert([
        { name: "kaos", price: 80000 },
        { name: "sepatu", price: 300000 },
        { name: "helm", price: 500000 },
        { name: "kemeja", price: 100000 }
    ]);
};
