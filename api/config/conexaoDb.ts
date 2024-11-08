import _knex, { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'forja_bruta',
  },
  pool: { min: 0, max: 10 },
}

export const knex = _knex(config);
