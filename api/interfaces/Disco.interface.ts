/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { TDisco } from '../types/Disco.type';
import { TRequestBody, TRequestParams } from '../types/Request.type';
import {
  TResponseDelete,
  TResponseErro,
  TResponseGet,
  TResponseGetId,
  TResponsePost,
  TResponsePut,
} from '../types/Response.type';

export interface IDiscoService {
  id: number | string;
  titulo: string;
  data_lancamento: Date;
  url_imagem: string;
  id_artista: number | string;
  id_gravadora: number | string;
  id_tipo: number | string;
  adicionar(): Promise<TDisco>;
  pegaTodos(): Promise<Array<TDisco>>;
  pegaUmPorId(): Promise<TDisco>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IDiscoController {
  adicionar(
    req: Request<{},{},TRequestBody.Disco>,
    res: Response<TResponsePost.Disco | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request,
    res: Response<TResponseGet.Disco | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Disco>,
    res: Response<TResponseGetId.Disco | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Disco, {}, TRequestBody.Disco>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Disco>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}