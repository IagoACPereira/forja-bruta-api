import "reflect-metadata";
import express, { Application } from 'express';
import { AppDataSource } from "./config/AppDataSource";
import { routes } from "./routes";

const app: Application = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao banco com sucesso');
  })
  .catch(error => {
    console.log('Falha ao conectar com o banco: \n' + error);
  });

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  );

routes(app);

export default app;
