import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IGravadoraController } from "../interfaces/Gravadora.interface";
export declare class GravadoraController implements IGravadoraController {
    adicionar(req: Request<{}, {}, TRequestBody.Gravadora>, res: Response<TResponsePost.Gravadora | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Gravadora | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Gravadora>, res: Response<TResponseGetId.Gravadora | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Gravadora, {}, TRequestBody.Gravadora>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Gravadora>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
