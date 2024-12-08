import { Request, Response } from "express";
import { TPermissao } from "../types/Permissao.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

export interface IPermissaoService {
  id: number | string;
  titulo: string;
  descricao: Text;
  adicionar(): Promise<TPermissao>;
  pegaTodos(): Promise<Array<TPermissao>>;
  pegaUmPorId(): Promise<TPermissao>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IPermissaoController {
  adicionar(
    req: Request<{},{},TRequestBody.Permissao>, 
    res: Response<TResponsePost.Permissao | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request, 
    res: Response<TResponseGet.Permissao | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Permissao>, 
    res: Response<TResponseGetId.Permissao | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Permissao, {}, TRequestBody.Permissao>, 
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Permissao>, 
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}