import { Request, Response } from "express";
import { TFaixa } from "../types/Faixa.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

export interface IFaixaModel {
  id?: number | string;
  titulo?: string;
  duracao?: number | string;
  num_faixa?: number | string;
  letra?: Text;
  id_disco?: number | string;
  adicionar(): Promise<TFaixa>;
  pegaTodos(): Promise<Array<TFaixa>>;
  pegaUmPorId(): Promise<TFaixa>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IFaixaController {
  adicionar(
    req: Request<{},{},TRequestBody.Faixa>, 
    res: Response<TResponsePost.Faixa | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request, 
    res: Response<TResponseGet.Faixa | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Faixa>, 
    res: Response<TResponseGetId.Faixa | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Faixa, {}, TRequestBody.Faixa>, 
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Faixa>, 
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}