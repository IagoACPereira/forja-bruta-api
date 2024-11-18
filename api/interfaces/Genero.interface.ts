import { Request, Response } from "express";
import { TGenero } from "../types/Genero.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

export interface IGeneroModel {
  id?: number | string;
  titulo?: string;
  adicionar(): Promise<TGenero>;
  pegaTodos(): Promise<Array<TGenero>>;
  pegaUmPorId(): Promise<TGenero>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IGeneroController {
  adicionar(
    req: Request<{},{},TRequestBody.Genero>, 
    res: Response<TResponsePost.Genero | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request, 
    res: Response<TResponseGet.Genero | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Genero>, 
    res: Response<TResponseGetId.Genero | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Genero, {}, TRequestBody.Genero>, 
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Genero>, 
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}