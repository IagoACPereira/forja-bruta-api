import { Request, Response } from "express";
import { TPais } from "../types/Pais.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

export interface IPaisModel {
  id?: number | string;
  nome?: string;
  adicionar(): Promise<TPais>;
  pegaTodos(): Promise<Array<TPais>>;
  pegaUmPorId(): Promise<TPais>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IPaisController {
  adicionar(
    req: Request<{},{},TRequestBody.Pais>, 
    res: Response<TResponsePost.Pais | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request, 
    res: Response<TResponseGet.Pais | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Pais>, 
    res: Response<TResponseGetId.Pais | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Pais, {}, TRequestBody.Pais>, 
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Pais>, 
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}