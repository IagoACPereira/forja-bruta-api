import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseErroValidacao } from '../types/Response.type';
import { TGenero } from '../types/Genero.type';
import { TArtista } from '../types/Artista.type';
import { TGravadora } from '../types/Gravadora.type';
import { TTipo } from '../types/Tipo.type';
import { TDisco } from '../types/Disco.type';
import { TFaixa } from '../types/Faixa.type';
import { TUsuario } from '../types/Usuario.type';

export class UsuarioMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseErroValidacao>, 
    next: NextFunction
  ): Promise<void> {
    const schema = yup.object({
      nome: yup.string().required(),
      email: yup.string().required().email(),
      senha: yup.string().required(),
      telefone: yup.string().required(),
      id_permissao: yup.number().required(),
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