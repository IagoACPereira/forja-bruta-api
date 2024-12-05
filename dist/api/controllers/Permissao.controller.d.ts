import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IPermissaoController } from "../interfaces/Permissao.interface";
export declare class PermissaoController implements IPermissaoController {
    adicionar(req: Request<{}, {}, TRequestBody.Permissao>, res: Response<TResponsePost.Permissao | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Permissao | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Permissao>, res: Response<TResponseGetId.Permissao | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Permissao, {}, TRequestBody.Permissao>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Permissao>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
