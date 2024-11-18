import { Request, Response } from "express";
import { TGravadora } from "../types/Gravadora.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

export interface IGravadoraModel {
  id?: number | string;
  nome?: string;
  url_imagem?: string;
  id_regiao?: number | string;
  adicionar(): Promise<TGravadora>;
  pegaTodos(): Promise<Array<TGravadora>>;
  pegaUmPorId(): Promise<TGravadora>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IGravadoraController {
  adicionar(
    req: Request<{},{},TRequestBody.Gravadora>, 
    res: Response<TResponsePost.Gravadora | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request, 
    res: Response<TResponseGet.Gravadora | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Gravadora>, 
    res: Response<TResponseGetId.Gravadora | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Gravadora, {}, TRequestBody.Gravadora>, 
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Gravadora>, 
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}