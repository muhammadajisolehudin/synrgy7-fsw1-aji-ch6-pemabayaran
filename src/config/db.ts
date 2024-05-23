import Knex from "knex";
import { Model } from "objection";

const knexInstance = Knex({
  client: "pg",
  connection: {
    database: "db_payment",
    user: "postgres",
    password: "ditobayu25",
  },
});

Model.knex(knexInstance);

export default knexInstance;
