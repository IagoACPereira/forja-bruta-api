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
import { TFaixa } from '../types/Faixa.type';
import { IFaixaController } from '../interfaces/Faixa.interface';
import { FaixaService } from '../services/Faixa.service';

export class FaixaController implements IFaixaController {
  async adicionar(
    req: Request<{},{},TRequestBody.Faixa>,
    res: Response<TResponsePost.Faixa | TResponseErro>,
  ): Promise<void> {
    const {
      duracao,
      id_disco,
      letra,
      num_faixa,
      titulo,
    } = req.body as TFaixa;
    try {
      const novaFaixa = await new FaixaService(
        0,
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
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }

  async exibirTodos(
    req: Request,
    res: Response<TResponseGet.Faixa | TResponseErro>,
  ): Promise<void> {
    try {
      const faixas = await new FaixaService(
        0,
        '',
        0.0,
        0,
        '',
        0,
      ).pegaTodos();
      res.status(200).json({
        faixas,
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
    req: Request<TRequestParams.Faixa>,
    res: Response<TResponseGetId.Faixa | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    try {
      const faixa = await new FaixaService(id,
        '',
        0.0,
        0,
        '',
        0,
      ).pegaUmPorId();
      res.status(200).json({
        faixa,
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
    req: Request<TRequestParams.Faixa, {}, TRequestBody.Faixa>,
    res: Response<TResponsePut | TResponseErro>,
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
      await new FaixaService(
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
        mensagem: `${ error }`,
        statusCode: 400,
      });
    }
  }

  async deletar(
    req: Request<TRequestParams.Faixa>,
    res: Response<TResponseDelete | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new FaixaService(id,
        '',
        0.0,
        0,
        '',
        0,
      ).deletar();
      res.status(200).json({
        mensagem: 'Faixa deletada com sucesso',
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