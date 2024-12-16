/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { TUsuario } from '../types/Usuario.type';
import { TRequestBody, TRequestParams } from '../types/Request.type';
import {
  TResponseDelete,
  TResponseErro,
  TResponseGet,
  TResponseGetId,
  TResponsePost,
  TResponsePut,
} from '../types/Response.type';

export interface IUsuarioService {
  id: number | string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  id_permissao: number | string;
  adicionar(): Promise<TUsuario>;
  pegaTodos(): Promise<Array<TUsuario>>;
  pegaUmPorId(): Promise<TUsuario>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IUsuarioController {
  adicionar(
    req: Request<{},{},TRequestBody.Usuario>,
    res: Response<TResponsePost.Usuario | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request,
    res: Response<TResponseGet.Usuario | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Usuario>,
    res: Response<TResponseGetId.Usuario | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Usuario, {}, TRequestBody.Usuario>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Usuario>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}