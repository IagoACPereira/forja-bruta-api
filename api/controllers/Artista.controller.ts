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
import { TArtista } from "../types/Artista.type";
import { ArtistaModel } from "../models/Artista.model";
import { IArtistaController } from "../interfaces/Artista.interface";

export class ArtistaController implements IArtistaController {
  async adicionar(
    req: Request<{},{},TRequestBody.Artista>,
    res: Response<TResponsePost.Artista | TResponseErro>
  ): Promise<void> {
    const { 
      nome,
      ativo,
      data_formacao,
      descricao,
      id_regiao,
      url_imagem,
    } = req.body as TArtista;
    try {
      const novoArtista = await new ArtistaModel(
        undefined,
        nome,
        data_formacao,
        ativo,
        descricao,
        url_imagem,
        id_regiao,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Artista adicionado com sucesso',
        dados: novoArtista,
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
    res: Response<TResponseGet.Artista | TResponseErro>
  ): Promise<void> {
    try {
      const artistas = await new ArtistaModel().pegaTodos();
      res.status(200).json({
        artistas,
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
    req: Request<TRequestParams.Artista>,
    res: Response<TResponseGetId.Artista | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const artista = await new ArtistaModel(id).pegaUmPorId();
      res.status(200).json({
        artista,
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
    req: Request<TRequestParams.Artista, {}, TRequestBody.Artista>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    const { 
      ativo,
      data_formacao,
      descricao,
      id_regiao,
      nome,
      url_imagem,
     } = req.body as TArtista;
    try {
      await new ArtistaModel(
        id, 
        nome,
        data_formacao,
        ativo,
        descricao,
        url_imagem,
        id_regiao,
      ).atualizar();
      res.status(200).json({
        mensagem: 'Artista atualizado com sucesso',
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
    req: Request<TRequestParams.Artista>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new ArtistaModel(Number(id)).deletar();
      res.status(200).json({
        mensagem: 'Artista deletado com sucesso',
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