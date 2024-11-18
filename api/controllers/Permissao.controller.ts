import { Request, Response } from "express";
import { PaisModel } from "../models/Pais.model";
import { 
  TResponseDelete, 
  TResponseErro, 
  TResponseGet, 
  TResponseGetId, 
  TResponsePost, 
  TResponsePut 
} from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { ArtistaModel } from "../models/Artista.model";
import { TGravadora } from "../types/Gravadora.type";
import { GravadoraModel } from "../models/Gravadora.model";
import { TTipo } from "../types/Tipo.type";
import { TipoModel } from "../models/Tipo.model";
import { TDisco } from "../types/Disco.type";
import { DiscoModel } from "../models/Disco.model";
import { TFaixa } from "../types/Faixa.type";
import { FaixaModel } from "../models/Faixa.model";
import { TPermissao } from "../types/Permissao.type";
import { PermissaoModel } from "../models/Permissao.model";
import { IPermissaoController } from "../interfaces/Permissao.interface";

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
      const novaPermissao = await new PermissaoModel(
        undefined,
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
      const permissoes = await new PermissaoModel().pegaTodos();
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
      const permissao = await new PermissaoModel(id).pegaUmPorId();
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
      await new PermissaoModel(
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
      await new PermissaoModel(id).deletar();
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