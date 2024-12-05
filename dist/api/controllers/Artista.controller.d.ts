import { Request, Response } from "express";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { IArtistaController } from "../interfaces/Artista.interface";
export declare class ArtistaController implements IArtistaController {
    adicionar(req: Request<{}, {}, TRequestBody.Artista>, res: Response<TResponsePost.Artista | TResponseErro>): Promise<void>;
    exibirTodos(req: Request, res: Response<TResponseGet.Artista | TResponseErro>): Promise<void>;
    exibirUm(req: Request<TRequestParams.Artista>, res: Response<TResponseGetId.Artista | TResponseErro>): Promise<void>;
    atualizar(req: Request<TRequestParams.Artista, {}, TRequestBody.Artista>, res: Response<TResponsePut | TResponseErro>): Promise<void>;
    deletar(req: Request<TRequestParams.Artista>, res: Response<TResponseDelete | TResponseErro>): Promise<void>;
}
