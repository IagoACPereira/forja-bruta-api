import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseErroValidacao } from '../types/Response.type';
import { TGenero } from '../types/Genero.type';

export class GeneroMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseErroValidacao>, 
    next: NextFunction
  ): Promise<void> {
    const schema = yup.object({
      titulo: yup.string()
        .required('Campo Titulo é string e obrigatório'),
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