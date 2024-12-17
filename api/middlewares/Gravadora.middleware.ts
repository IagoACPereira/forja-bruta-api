import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TGravadora } from '../types/Gravadora.type';
import { GravadoraModel } from '../models/Gravadora.model';
import { TRequestParams } from '../types/Request.type';
import { DiscoModel } from '../models/Disco.model';

export class GravadoraMiddlewares {
  async validaBody(
    req: Request,
    res: Response<TResponseErroValidacao>,
    next: NextFunction,
  ): Promise<void> {
    const schema = yup.object({
      nome: yup.string()
        .required('Campo "nome" é string e obrigatório'),
      url_imagem: yup.string()
        .required('Campo "url_imagem" é string e obrigatório')
        .url('Campo "url_imagem" deve ser uma url válida'),
      id_regiao: yup.number()
        .required('Campo "id_regiao" é numérico e obrigatório'),
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
        nome,
        url_imagem,
      } = req.body as TGravadora;

      req.body.nome = nome.trim()
        .toLowerCase();
      req.body.url_imagem = url_imagem.trim();

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
      nome,
      id_regiao,
    } = req.body as TGravadora;
    try {
      const gravadora = await GravadoraModel.findOne({
        where: {
          nome,
          id_regiao,
        },
      });

      if (gravadora) {
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

  async verificaRelacoesPreDelete(
    req: Request<TRequestParams.Gravadora>,
    res: Response<TResponseDefault>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const {
        id,
      } = req.params;

      const disco = await DiscoModel.findOne({
        where: {
          id_pais: id,
        },
      });

      if (disco) {
        throw new Error(
          'Não é possivel deletar esse registro pois está sendo utilizado como FK na tabela '
          + '"disco"',
        );
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