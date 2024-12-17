import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TDisco } from '../types/Disco.type';
import { DiscoModel } from '../models/Disco.model';
import { TRequestParams } from '../types/Request.type';
import { FaixaModel } from '../models/Faixa.model';

export class DiscoMiddlewares {
  async validaBody(
    req: Request,
    res: Response<TResponseErroValidacao>,
    next: NextFunction,
  ): Promise<void> {
    const schema = yup.object({
      titulo: yup.string()
        .required('Campo "titulo" é string e obrigatório'),
      data_lancamento: yup.date()
        .required('Campo "data_lancamento" é date e obrigatório'),
      url_imagem: yup.string()
        .required('Campo "url_imagem" é string e obrigatório')
        .url('Campo "url_imagem" deve ser uma url válida'),
      id_artista: yup.number()
        .required('Campo "id_artista" é numérico e obrigatório'),
      id_gravadora: yup.number()
        .required('Campo "id_gravadora" é numérico e obrigatório'),
      id_tipo: yup.number()
        .required('Campo "id_tipo" é numérico e obrigatório'),
      id_genero: yup.number()
        .required('Campo "id_genero" é numérico e obrigatório'),
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
        titulo,
        url_imagem,
      } = req.body as TDisco;

      req.body.titulo = titulo.trim()
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
      titulo,
      data_lancamento,
      id_artista,
      id_gravadora,
      id_tipo,
      id_genero,
    } = req.body as TDisco;
    try {
      const disco = await DiscoModel.findOne({
        where: {
          titulo,
          data_lancamento,
          id_artista,
          id_gravadora,
          id_tipo,
          id_genero,
        },
      });

      if (disco) {
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
    req: Request<TRequestParams.Disco>,
    res: Response<TResponseDefault>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const {
        id,
      } = req.params;

      const faixa = await FaixaModel.findOne({
        where: {
          id_pais: id,
        },
      });

      if (faixa) {
        throw new Error(
          'Não é possivel deletar esse registro pois está sendo utilizado como FK na tabela '
          + '"faixa"',
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