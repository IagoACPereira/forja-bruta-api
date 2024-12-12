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
import { TPermissao } from "../types/Permissao.type";
import { IPermissaoController } from "../interfaces/Permissao.interface";
import { PermissaoService } from "../services/Permissao.service";

export class PermissaoController implements IPermissaoController {
  async adicionar(
    req: Request<{},{},TRequestBody.Permissao>,
    res: Response<TResponsePost.Permissao | TResponseErro>
  ): Promise<void> {
    const {
      descricao,
      titulo,
    } = req.body as TPermissao;
    try {
      const novaPermissao = await new PermissaoService(
        0,
        titulo,
        descricao,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Permissão adicionada com sucesso',
        dados: novaPermissao,
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
    res: Response<TResponseGet.Permissao | TResponseErro>
  ): Promise<void> {
    try {
      const permissoes = await new PermissaoService(
        0,
        '',
        '',
      ).pegaTodos();
      res.status(200).json({
        permissoes,
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
    req: Request<TRequestParams.Permissao>,
    res: Response<TResponseGetId.Permissao | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const permissao = await new PermissaoService(
        id,
        '',
        '',
      ).pegaUmPorId();
      res.status(200).json({
        permissao,
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
    req: Request<TRequestParams.Permissao, {}, TRequestBody.Permissao>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    const {
      descricao,
      titulo,
    } = req.body as TPermissao;
    try {
      await new PermissaoService(
        id,
        titulo,
        descricao,
      ).atualizar();
      res.status(200).json({
        mensagem: 'Permissão atualizada com sucesso',
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
    req: Request<TRequestParams.Permissao>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new PermissaoService(
        id,
        '',
        '',
      ).deletar();
      res.status(200).json({
        mensagem: 'Permissão deletada com sucesso',
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