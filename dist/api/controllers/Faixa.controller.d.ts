import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IFaixaController } from "../interfaces/Faixa.interface";
export declare class FaixaController implements IFaixaController {
    adicionar(req: Request<{}, {}, TRequestBody.Faixa>, res: Response<TResponsePost.Faixa | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Faixa | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Faixa>, res: Response<TResponseGetId.Faixa | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Faixa, {}, TRequestBody.Faixa>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Faixa>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
