import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TDisco } from '../types/Disco.type';

export class DiscoMiddlewares {
  async validaBody(
    req: Request, 
    res: Response<TResponseErroValidacao>, 
    next: NextFunction
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
          titulo,
          url_imagem,
        } = req.body as TDisco;

        req.body.titulo = titulo.trim()
          .toLowerCase();
        req.body.url_imagem = url_imagem.trim();

        console.log(req.body);
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