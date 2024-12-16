/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { TRegiao } from '../types/Regiao.type';
import { TRequestBody, TRequestParams } from '../types/Request.type';
import {
  TResponseDelete,
  TResponseErro,
  TResponseGet,
  TResponseGetId,
  TResponsePost,
  TResponsePut,
} from '../types/Response.type';

export interface IRegiaoService {
  id: number | string;
  estado: string;
  uf: string;
  id_pais: number | string;
  adicionar(): Promise<TRegiao>;
  pegaTodos(): Promise<Array<TRegiao>>;
  pegaUmPorId(): Promise<TRegiao>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IRegiaoController {
  adicionar(
    req: Request<'','',TRequestBody.Regiao>,
    res: Response<TResponsePost.Regiao | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request,
    res: Response<TResponseGet.Regiao | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Regiao>,
    res: Response<TResponseGetId.Regiao | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Regiao, '', TRequestBody.Regiao>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Regiao>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}