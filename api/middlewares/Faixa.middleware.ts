import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseErroValidacao } from '../types/Response.type';
import { TGenero } from '../types/Genero.type';
import { TArtista } from '../types/Artista.type';
import { TGravadora } from '../types/Gravadora.type';
import { TTipo } from '../types/Tipo.type';
import { TDisco } from '../types/Disco.type';
import { TFaixa } from '../types/Faixa.type';

export class FaixaMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseErroValidacao>, 
    next: NextFunction
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
}