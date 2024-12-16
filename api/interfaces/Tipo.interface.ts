/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { TTipo } from '../types/Tipo.type';
import { TRequestBody, TRequestParams } from '../types/Request.type';
import {
  TResponseDelete,
  TResponseErro,
  TResponseGet,
  TResponseGetId,
  TResponsePost,
  TResponsePut,
} from '../types/Response.type';

export interface ITipoService {
  id: number | string;
  titulo: string;
  adicionar(): Promise<TTipo>;
  pegaTodos(): Promise<Array<TTipo>>;
  pegaUmPorId(): Promise<TTipo>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface ITipoController {
  adicionar(
    req: Request<{},{},TRequestBody.Tipo>,
    res: Response<TResponsePost.Tipo | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request,
    res: Response<TResponseGet.Tipo | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Tipo>,
    res: Response<TResponseGetId.Tipo | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Tipo, {}, TRequestBody.Tipo>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Tipo>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}