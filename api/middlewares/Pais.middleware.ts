import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TPais } from '../types/Pais.type';
import { PaisModel } from '../models/Pais.model';

export class PaisMiddlewares {
  async validaBody(req: Request, res: Response<TResponseErroValidacao>, next: NextFunction): Promise<void> {
    const schema = yup.object({
      nome: yup.string()
        .required('Campo "nome" é string e obrigatório')
    })
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

  sanitizaBody(req: Request, res: Response<TResponseDefault & { erro: string }>, next: NextFunction): void {
    try {
      let { 
        nome,
      } = req.body as TPais;

      req.body.nome = nome.trim()
        .toLowerCase();

      next();
    } catch (error) {
      const erro = error as Error;

      res.status(400).json({
        mensagem: 'Não foi possível sanitizar os dados do body',
        erro: erro.message,
        statusCode: 400,
      })
    }
  }

  async verificaDuplicidade(req: Request, res: Response<TResponseDefault>, next: NextFunction): Promise<void> {
    const {
      nome,
    } = req.body as TPais;
    try {
      const pais = await PaisModel.findOne({
        where: {
          nome,
        }
      });

      if (pais) {
        throw new Error('Já possui registro com os mesmos dados')
      }

      next();
    } catch (error) {
      const erro = error as Error;
      res.status(400).json({
        mensagem: erro.message,
        statusCode: 400,
      })
    }
  }
}