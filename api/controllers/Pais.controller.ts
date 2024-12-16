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
import { IPaisController } from '../interfaces/Pais.interface';
import { PaisService } from '../services/Pais.service';

export class PaisController implements IPaisController {
  async adicionar(
    req: Request<'','',TRequestBody.Pais>,
    res: Response<TResponsePost.Pais | TResponseErro>,
  ): Promise<void> {
    const { nome } = req.body;
    try {
      const novoPais = await new PaisService(
        0,
        nome,
      ).adicionar();

      res.status(201).json({
        mensagem: 'País adicionado com sucesso',
        dados: novoPais,
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
    res: Response<TResponseGet.Pais | TResponseErro>,
  ): Promise<void> {
    try {
      const paises = await new PaisService(
        0,
        '',
      ).pegaTodos();
      res.status(200).json({
        paises,
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
    req: Request<TRequestParams.Pais>,
    res: Response<TResponseGetId.Pais | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    try {
      const pais = await new PaisService(
        Number(id),
        '',
      ).pegaUmPorId();
      res.status(200).json({
        pais,
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
    req: Request<TRequestParams.Pais, '', TRequestBody.Pais>,
    res: Response<TResponsePut | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    const { nome } = req.body;
    try {
      await new PaisService(
        Number(id),
        nome,
      ).atualizar();
      res.status(200).json({
        mensagem: 'País atualizado com sucesso',
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
    req: Request<TRequestParams.Pais>,
    res: Response<TResponseDelete | TResponseErro>,
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new PaisService(
        Number(id),
        '',
      ).deletar();
      res.status(200).json({
        mensagem: 'País deletado com sucesso',
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