import { Request, Response, Router } from "express";
import pais from './Pais.router';
import genero from './Genero.router';
import artista from './Artista.router';

export function routes(app: Router) {
  app
    .get('/forja-bruta/api', (req: Request, res: Response<string>) => {
      res.status(200).json('Forja Bruta API')
    })
    .use('/forja-bruta/api/pais', pais)
    .use('/forja-bruta/api/genero', genero)
    .use('/forja-bruta/api/artista', artista);
}
