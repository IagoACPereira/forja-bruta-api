import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TFaixa } from '../types/Faixa.type';
import { FaixaModel } from '../models/Faixa.model';

export class FaixaMiddlewares {
  async validaBody(
    req: Request,
    res: Response<TResponseErroValidacao>,
    next: NextFunction,
  ): Promise<void> {
    const schema = yup.object({
      titulo: yup.string()
        .required('Campo "titulo" é string e obrigatório'),
      num_faixa: yup.number()
        .required('Campo "num_faixa" é numérico e obrigatório'),
      duracao: yup.number()
        .required('Campo "duracao" é numérico e obrigatório'),
      letra: yup.string()
        .required('Campo "letra" é string e obrigatório'),
      id_disco: yup.number()
        .required('Campo "id_disco" é numérico e obrigatório'),
    });
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      const erroValidacao = error as yup.ValidationError;
      if (erroValidacao.errors) {
        res.status(400).json({
          mensagem: 'Erro de validação',
          erros: erroValidacao.errors,
          statusCode: 400,
        });
        return;
      }
      next();
    }
  }

  sanitizaBody(
    req: Request,
    res: Response<TResponseDefault & { erro: string }>,
    next: NextFunction,
  ): void {
    try {
      const {
        letra,
        titulo,
      } = req.body as TFaixa;

      req.body.letra = letra.trim();
      req.body.titulo = titulo.trim()
        .toLowerCase();

      next();
    } catch (error) {
      const erro = error as Error;

      res.status(400).json({
        mensagem: 'Não foi possível sanitizar os dados do body',
        erro: erro.message,
        statusCode: 400,
      });
    }
  }

  async verificaDuplicidade(
    req: Request,
    res: Response<TResponseDefault>,
    next: NextFunction,
  ): Promise<void> {
    const {
      titulo,
      num_faixa,
      id_disco,
    } = req.body as TFaixa;
    try {
      const faixa = await FaixaModel.findOne({
        where: {
          titulo,
          num_faixa,
          id_disco,
        },
      });

      if (faixa) {
        throw new Error('Já possui registro com os mesmos dados');
      }

      next();
    } catch (error) {
      const erro = error as Error;
      res.status(400).json({
        mensagem: erro.message,
        statusCode: 400,
      });
    }
  }
}