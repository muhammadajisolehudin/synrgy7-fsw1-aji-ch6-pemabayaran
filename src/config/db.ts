import Knex from 'knex';
import { Model } from 'objection';

const knexInstance = Knex({
  client: 'pg',
  connection: {
    database: 'db_payment',
    user: 'postgres',
    password: '020402',
  },
});

Model.knex(knexInstance);

export default knexInstance;
