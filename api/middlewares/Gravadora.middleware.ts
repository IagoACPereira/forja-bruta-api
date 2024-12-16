import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseErroValidacao } from '../types/Response.type';

export class GravadoraMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseErroValidacao>, 
    next: NextFunction
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
}