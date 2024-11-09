import { Request, Response, Router } from "express";
import pais from './Pais.router';
import regiao from './Regiao.router';
import genero from './Genero.router';
import artista from './Artista.router';
import disco from './Disco.router';
import faixa from './Faixa.router';
import gravadora from './Gravadora.router';
import permissao from './Permissao.router';
import tipo from './Tipo.router';
import usuario from './Usuario.router';


export function routes(app: Router) {
  app
    .get('/forja-bruta/api', (req: Request, res: Response<string>) => {
      res.status(200).json('Forja Bruta API')
    })
    .use('/forja-bruta/api/artista', artista)
    .use('/forja-bruta/api/pais', pais)
    .use('/forja-bruta/api/regiao', regiao)
    .use('/forja-bruta/api/genero', genero)
    .use('/forja-bruta/api/disco', disco)
    .use('/forja-bruta/api/faixa', faixa)
    .use('/forja-bruta/api/gravadora', gravadora)
    .use('/forja-bruta/api/permissao', permissao)
    .use('/forja-bruta/api/tipo', tipo)
    .use('/forja-bruta/api/usuario', usuario);
}
