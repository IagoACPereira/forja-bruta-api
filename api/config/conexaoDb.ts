import { Sequelize } from 'sequelize';

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
  sequelize.authenticate();
  // eslint-disable-next-line no-console
  console.log('Conectado ao banco com sucesso');

} catch {
  // eslint-disable-next-line no-console
  console.log('Ocorreu um erro ao conectar ao banco');
}
