import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IRegiaoController } from "../interfaces/Regiao.interface";
export declare class RegiaoController implements IRegiaoController {
    adicionar(req: Request<{}, {}, TRequestBody.Regiao>, res: Response<TResponsePost.Regiao | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Regiao | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Regiao>, res: Response<TResponseGetId.Regiao | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Regiao, {}, TRequestBody.Regiao>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Regiao>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
