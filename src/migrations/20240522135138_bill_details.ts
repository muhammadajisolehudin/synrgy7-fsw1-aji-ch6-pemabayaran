import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('bill_details', (table: Knex.TableBuilder)=>{
        table.increments('id').primary();
        table.integer('bill_id').unsigned().notNullable();
        table.foreign('bill_id').references('bills.id').onDelete('CASCADE').onUpdate('CASCADE');
        table.integer('bill_types_id').unsigned().notNullable();
        table.foreign('bill_types_id').references('bill_types.id').onDelete('CASCADE').onUpdate('CASCADE');
        table.integer('amount').notNullable()
        table.integer('total_price').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('bill_details')
}

