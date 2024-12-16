import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseErroValidacao } from '../types/Response.type';

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
}