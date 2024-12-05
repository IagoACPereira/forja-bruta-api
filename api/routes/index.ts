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

const endpointRaiz: string = String(process.env.ENDPOINT_RAIZ);

export function routes(app: Router) {
  app
    .get(endpointRaiz, (req: Request, res: Response<string>) => {
      res.status(200).json('Forja Bruta API')
    })
    .use(`${process.env.ENDPOINT_RAIZ}/artista`, artista)
    .use(`${process.env.ENDPOINT_RAIZ}/pais`, pais)
    .use(`${process.env.ENDPOINT_RAIZ}/regiao`, regiao)
    .use(`${process.env.ENDPOINT_RAIZ}/genero`, genero)
    .use(`${process.env.ENDPOINT_RAIZ}/disco`, disco)
    .use(`${process.env.ENDPOINT_RAIZ}/faixa`, faixa)
    .use(`${process.env.ENDPOINT_RAIZ}/gravadora`, gravadora)
    .use(`${process.env.ENDPOINT_RAIZ}/permissao`, permissao)
    .use(`${process.env.ENDPOINT_RAIZ}/tipo`, tipo)
    .use(`${process.env.ENDPOINT_RAIZ}/usuario`, usuario);
}
