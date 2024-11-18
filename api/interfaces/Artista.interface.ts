import { Request, Response } from "express";
import { TArtista } from "../types/Artista.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

export interface IArtistaModel {
  id?: number | string;
  nome?: string;
  data_formacao?: Date;
  ativo?: boolean;
  descricao?: Text;
  url_imagem?: string;
  id_regiao?: number | string;
  adicionar(): Promise<TArtista>;
  pegaTodos(): Promise<Array<TArtista>>;
  pegaUmPorId(): Promise<TArtista>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}

export interface IArtistaController {
  adicionar(
    req: Request<{},{},TRequestBody.Artista>, 
    res: Response<TResponsePost.Artista | TResponseErro>
  ): Promise<void>;
  exibirTodos(
    req: Request, 
    res: Response<TResponseGet.Artista | TResponseErro>
  ): Promise<void>;
  exibirUm(
    req: Request<TRequestParams.Artista>, 
    res: Response<TResponseGetId.Artista | TResponseErro>
  ): Promise<void>;
  atualizar(
    req: Request<TRequestParams.Artista, {}, TRequestBody.Artista>, 
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void>;
  deletar(
    req: Request<TRequestParams.Artista>, 
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void>;
}