import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IDiscoController } from "../interfaces/Disco.interface";
export declare class DiscoController implements IDiscoController {
    adicionar(req: Request<{}, {}, TRequestBody.Disco>, res: Response<TResponsePost.Disco | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Disco | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Disco>, res: Response<TResponseGetId.Disco | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Disco, {}, TRequestBody.Disco>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Disco>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
