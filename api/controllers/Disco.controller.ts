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
import { TDisco } from "../types/Disco.type";
import { IDiscoController } from "../interfaces/Disco.interface";
import { DiscoService } from "../services/Disco.service";

export class DiscoController implements IDiscoController {
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
      id_genero,
    } = req.body as TDisco;
    try {
      const novoDisco = await new DiscoService(
        '',
        titulo,
        data_lancamento,
        url_imagem,
        id_artista,
        id_gravadora,
        id_tipo,
        id_genero,
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
      const discos = await new DiscoService(
        0,
        '',
        new Date(),
        '',
        0,
        0,
        0,
        0,
      ).pegaTodos();
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
      const disco = await new DiscoService(
        id,
        '',
        new Date(),
        '',
        0,
        0,
        0,
        0,
      ).pegaUmPorId();
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
      id_genero,
    } = req.body as TDisco;
    try {
      await new DiscoService(
        id,
        titulo,
        data_lancamento,
        url_imagem,
        id_artista,
        id_gravadora,
        id_tipo,
        id_genero,
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
      await new DiscoService(
        id,
        '',
        new Date(),
        '',
        0,
        0,
        0,
        0,
      ).deletar();
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