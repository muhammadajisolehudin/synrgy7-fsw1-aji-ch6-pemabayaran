import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('bill_types', (table: Knex.TableBuilder)=>{
        table.increments('id').primary()
        table.string('name', 255).notNullable()
        table.integer('price').notNullable()
    })
    
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('bill_types')
}

