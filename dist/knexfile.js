"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
const config = {
    development: {
        client: "pg",
        connection: {
            user: "postgres",
            password: "1234",
            port: 5432,
            host: "127.0.0.1",
            database: "db_payment",
        },
        migrations: {
            directory: __dirname + "/src/migrations",
        },
        seeds: {
            directory: __dirname + "/src/seeds",
        },
    },
};
module.exports = config;
