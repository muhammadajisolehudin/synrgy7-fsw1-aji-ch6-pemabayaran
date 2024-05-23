import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('bills', (table: Knex.AlterTableBuilder) => {
        // field status
        table.boolean('status').defaultTo(false);

        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('bills', (table: Knex.AlterTableBuilder) => {
        table.dropColumn('status');
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
    });
}
