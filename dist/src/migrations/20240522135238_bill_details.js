"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('bill_details', (table) => {
            table.increments('id').primary();
            table.integer('bill_id').unsigned().notNullable();
            table.foreign('bill_id').references('bills.id').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('bill_types_id').unsigned().notNullable();
            table.foreign('bill_types_id').references('bill_types.id').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('amount').notNullable();
            table.integer('total_price').notNullable();
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('bill_details');
    });
}
exports.down = down;
