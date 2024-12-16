import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TRegiao } from '../types/Regiao.type';
import { RegiaoModel } from '../models/Regiao.model';

export class RegiaoMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseErroValidacao>, 
    next: NextFunction
  ): Promise<void> {
    const schema = yup.object({
      estado: yup.string()
        .required('Campo "estado" é string e obrigatório'),
      uf: yup.string()
        .required('Campo "uf" é string e obrigatório')
        .min(2, 'Campo "uf" deve ter 2 caracteres')
        .max(2, 'Campo "uf" deve ter 2 caracteres'),
      id_pais: yup.number()
        .required('Campo "id_pais" é numérico e obrigatório'),
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

  sanitizaBody(req: Request, res: Response<TResponseDefault & { erro: string }>, next: NextFunction): void {
    try {
      let { 
        estado,
        uf,
      } = req.body as TRegiao;

      req.body.estado = estado.trim()
        .toLowerCase();
      req.body.uf = uf.trim()
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
      estado,
      uf,
      id_pais,
    } = req.body as TRegiao;
    try {
      const regiao = await RegiaoModel.findOne({
        where: {
          estado,
          uf,
          id_pais,
        }
      });

      if (regiao) {
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