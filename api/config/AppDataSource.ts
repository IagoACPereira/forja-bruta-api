import { DataSource } from "typeorm";
import { GeneroEntity } from "../entities/Genero.entity";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'forja_bruta',
  synchronize: true,
  logging: true,
  entities: [
    GeneroEntity,
  ],
  subscribers: [],
  migrations: [],
});
