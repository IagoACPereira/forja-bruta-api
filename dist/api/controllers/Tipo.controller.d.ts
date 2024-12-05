import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { ITipoController } from "../interfaces/Tipo.interface";
export declare class TipoController implements ITipoController {
    adicionar(req: Request<{}, {}, TRequestBody.Tipo>, res: Response<TResponsePost.Tipo | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Tipo | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Tipo>, res: Response<TResponseGetId.Tipo | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Tipo, {}, TRequestBody.Tipo>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Tipo>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
