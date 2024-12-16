import { Request, Response } from 'express';
import {
  TResponseDelete,
  TResponseErro,
  TResponseGet,
  TResponseGetId,
  TResponsePost,
  TResponsePut,
} from '../types/Response.type';
import { TRequestBody, TRequestParams } from '../types/Request.type';
import { TGravadora } from '../types/Gravadora.type';
import { IGravadoraController } from '../interfaces/Gravadora.interface';
import { GravadoraService } from '../services/Gravadora.service';

export class GravadoraController implements IGravadoraController {
  async adicionar(
    req: Request<'','',TRequestBody.Gravadora>,
    res: Response<TResponsePost.Gravadora | TResponseErro>,
  ): Promise<void> {
    const {
      id_regiao,
      nome,
      url_imagem,
    } = req.body as TGravadora;
    try {
      const novaGravadora = await new GravadoraService(
        0,
        nome,
        url_imagem,
        Number(id_regiao),
      ).adicionar();

      res.status(201).json({
        mensagem: 'Gravadora adicionada com sucesso',
        dados: novaGravadora,
        statusCode: 201,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }

  async exibirTodos(
    req: Request,
    res: Response<TResponseGet.Gravadora | TResponseErro>,
  ): Promise<void> {
    try {
      const gravadoras = await new GravadoraService(
        0,
        '',
        '',
        0,
      ).pegaTodos();
      res.status(200).json({
        gravadoras,
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }

  async exibirUm(
    req: Request<TRequestParams.Gravadora>,
    res: Response<TResponseGetId.Gravadora | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    try {
      const gravadora = await new GravadoraService(
        Number(id),
        '',
        '',
        0,
      ).pegaUmPorId();
      res.status(200).json({
        gravadora,
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }

  async atualizar(
    req: Request<TRequestParams.Gravadora, '', TRequestBody.Gravadora>,
    res: Response<TResponsePut | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    const {
      id_regiao,
      nome,
      url_imagem,
    } = req.body as TGravadora;
    try {
      await new GravadoraService(
        Number(id),
        nome,
        url_imagem,
        Number(id_regiao),
      ).atualizar();
      res.status(200).json({
        mensagem: 'Gravadora atualizado com sucesso',
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }

  async deletar(
    req: Request<TRequestParams.Gravadora>,
    res: Response<TResponseDelete | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new GravadoraService(
        Number(id),
        '',
        '',
        0,
      ).deletar();
      res.status(200).json({
        mensagem: 'Gravadora deletado com sucesso',
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }
}