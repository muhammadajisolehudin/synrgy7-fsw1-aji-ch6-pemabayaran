import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table: Knex.AlterTableBuilder) => {
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table: Knex.AlterTableBuilder) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
    });
}
