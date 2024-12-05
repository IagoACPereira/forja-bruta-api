import { Request, Response } from "express";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { IGeneroController } from "../interfaces/Genero.interface";
export declare class GeneroController implements IGeneroController {
    adicionar(req: Request<{}, {}, TRequestBody.Genero>, res: Response<TResponsePost.Genero | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Genero | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Genero>, res: Response<TResponseGetId.Genero | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Genero, {}, TRequestBody.Genero>, res: Response<TResponsePut>): Promise<void>;
    deletar(req: Request<TRequestParams.Genero, {}, TRequestBody.Genero>, res: Response<TResponseDelete>): Promise<void>;
}
