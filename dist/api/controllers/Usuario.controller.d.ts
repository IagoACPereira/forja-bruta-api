import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IUsuarioController } from "../interfaces/Usuario.interface";
export declare class UsuarioController implements IUsuarioController {
    adicionar(req: Request<{}, {}, TRequestBody.Usuario>, res: Response<TResponsePost.Usuario | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Usuario | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Usuario>, res: Response<TResponseGetId.Usuario | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Usuario, {}, TRequestBody.Usuario>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Usuario>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
