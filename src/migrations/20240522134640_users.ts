import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder)=>{
        table.increments('id').primary();
        table.string('role', 100).notNullable()
        table.string('email', 255).notNullable().unique()
        table.string('password', 255).notNullable()
        table.string('name', 255).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

