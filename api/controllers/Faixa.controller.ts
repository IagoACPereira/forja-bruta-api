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

export class FaixaController {
  async adicionar(
    req: Request<{},{},TRequestBody.Faixa>,
    res: Response<TResponsePost.Faixa | TResponseErro>
  ): Promise<void> {
    const {
      duracao,
      id_disco,
      letra,
      num_faixa,
      titulo,
    } = req.body as TFaixa;
    try {
      const novaFaixa = await new FaixaModel(
        undefined,
        titulo,
        duracao,
        num_faixa,
        letra,
        id_disco,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Faixa adicionada com sucesso',
        dados: novaFaixa,
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
    res: Response<TResponseGet.Faixa | TResponseErro>
  ): Promise<void> {
    try {
      const faixas = await new FaixaModel().pegaTodos();
      res.status(200).json({
        faixas,
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
    req: Request<TRequestParams.Faixa>,
    res: Response<TResponseGetId.Faixa | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const faixa = await new FaixaModel(id).pegaUmPorId();
      res.status(200).json({
        faixa,
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
    req: Request<TRequestParams.Faixa, {}, TRequestBody.Faixa>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    const {
      duracao,
      id_disco,
      letra,
      num_faixa,
      titulo,
    } = req.body as TFaixa;
    try {
      await new FaixaModel(
        id,
        titulo,
        duracao,
        num_faixa,
        letra,
        id_disco,
      ).atualizar();
      res.status(200).json({
        mensagem: 'Faixa atualizada com sucesso',
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
    req: Request<TRequestParams.Faixa>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new FaixaModel(id).deletar();
      res.status(200).json({
        mensagem: 'Faixa deletada com sucesso',
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