import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TArtista } from '../types/Artista.type';

export class ArtistaMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseDefault | TResponseErroValidacao>, 
    next: NextFunction
  ): Promise<void> {
    const schema = yup.object({
      nome: yup.string()
        .required('Campo "nome" é string e obrigatório'),
      ativo: yup.boolean()
        .required('Campo "ativo" é boolean e obrigatório'),
      data_formacao: yup.date()
        .required('Campo "data_formacao" é string e obrigatório'),
      descricao: yup.string()
        .required('Campo "descricao" é string e obrigatório'),
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

  sanitizaBody(req: Request, res: Response<TResponseDefault & { erro: string }>, next: NextFunction): void {
    try {
      let { 
        nome,
        descricao,
        url_imagem,
      } = req.body as TArtista;

      req.body.nome = nome.trim()
        .toLowerCase();
      req.body.descricao = descricao.trim();
      req.body.url_imagem = url_imagem.trim();

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
}