import _knex, { Knex } from 'knex';
import { Sequelize } from 'sequelize';

const config: Knex.Config = {
  client: process.env.CLIENTE_DB,
  connection: {
    host: process.env.HOST_DB,
    port: Number(process.env.PORTA_DB),
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
  },
  pool: { min: 1, max: 10 },
}

export const knex = _knex(config);

export const sequelize = new Sequelize(
  String(process.env.DATABASE), 
  String(process.env.USER_DB), 
  process.env.PASSWORD_DB, {
  host: process.env.HOST_DB,
  port: Number(process.env.PORTA_DB),
  dialect: 'postgres',
  pool: { min: 1, max: 10 },
});

try {
  sequelize.authenticate()
  console.log('Conectado ao banco com sucesso');
  
} catch (error) {
  console.log('Ocorreu um erro ao conectar ao banco');
}
