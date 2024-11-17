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

export class DiscoController {
  async adicionar(
    req: Request<{},{},TRequestBody.Disco>,
    res: Response<TResponsePost.Disco | TResponseErro>
  ): Promise<void> {
    const {
      data_lancamento,
      id_artista,
      id_gravadora,
      id_tipo,
      titulo,
      url_imagem,
    } = req.body as TDisco;
    try {
      const novoDisco = await new DiscoModel(
        undefined,
        titulo,
        data_lancamento,
        url_imagem,
        id_artista,
        id_gravadora,
        id_tipo,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Disco adicionado com sucesso',
        dados: novoDisco,
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
    res: Response<TResponseGet.Disco | TResponseErro>
  ): Promise<void> {
    try {
      const discos = await new DiscoModel().pegaTodos();
      res.status(200).json({
        discos,
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
    req: Request<TRequestParams.Disco>,
    res: Response<TResponseGetId.Disco | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const disco = await new DiscoModel(id).pegaUmPorId();
      res.status(200).json({
        disco,
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
    req: Request<TRequestParams.Disco, {}, TRequestBody.Disco>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    const {
      data_lancamento,
      id_artista,
      id_gravadora,
      id_tipo,
      titulo,
      url_imagem,
    } = req.body as TDisco;
    try {
      await new DiscoModel(
        id,
        titulo,
        data_lancamento,
        url_imagem,
        id_artista,
        id_gravadora,
        id_tipo,
      ).atualizar();
      res.status(200).json({
        mensagem: 'Disco atualizado com sucesso',
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
    req: Request<TRequestParams.Disco>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new DiscoModel(id).deletar();
      res.status(200).json({
        mensagem: 'Disco deletado com sucesso',
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