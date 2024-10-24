import { Router } from "express";
import genero from './Genero.router';
import artista from './Artista.router';

export function routes(app: Router) {
  app
    .use('/forja-bruta/api/genero', genero)
    .use('/forja-bruta/api/artista', artista);
}
