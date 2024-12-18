import { Request, Response } from "express";
import { 
  TResponseDelete, 
  TResponseErro, 
  TResponseGet, 
  TResponseGetId, 
  TResponsePost, 
  TResponsePut 
} from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TTipo } from "../types/Tipo.type";
import { ITipoController } from "../interfaces/Tipo.interface";
import { TipoService } from "../services/Tipo.service";

export class TipoController implements ITipoController {
  async adicionar(
    req: Request<{},{},TRequestBody.Tipo>,
    res: Response<TResponsePost.Tipo | TResponseErro>
  ): Promise<void> {
    const { 
      titulo,
    } = req.body as TTipo;
    try {
      const novoTipo = await new TipoService(
        0,
        titulo,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Tipo adicionado com sucesso',
        dados: novoTipo,
        statusCode: 201,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async exibirTodos(
    req: Request,
    res: Response<TResponseGet.Tipo | TResponseErro>
  ): Promise<void> {
    try {
      const tipos = await new TipoService(
        0,
        ''
      ).pegaTodos();
      res.status(200).json({
        tipos,
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async exibirUm(
    req: Request<TRequestParams.Tipo>,
    res: Response<TResponseGetId.Tipo | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const tipo = await new TipoService(
        id,
        '',
      ).pegaUmPorId();
      res.status(200).json({
        tipo,
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async atualizar(
    req: Request<TRequestParams.Tipo, {}, TRequestBody.Tipo>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    const {
      titulo  
    } = req.body as TTipo;
    try {
      await new TipoService(
        id,
        titulo,
      ).atualizar();
      res.status(200).json({
        mensagem: 'Tipo atualizado com sucesso',
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async deletar(
    req: Request<TRequestParams.Tipo>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new TipoService(
        id, 
        ''
      ).deletar();
      res.status(200).json({
        mensagem: 'Tipo deletado com sucesso',
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }
}