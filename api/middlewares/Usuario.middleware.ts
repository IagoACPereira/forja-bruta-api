import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { TResponseDefault, TResponseErroValidacao } from '../types/Response.type';
import { TUsuario } from '../types/Usuario.type';
import { UsuarioModel } from '../models/Usuario.model';

export class UsuarioMiddlewares {
  async validaBody(
    req: Request,
    res: Response<TResponseErroValidacao>,
    next: NextFunction,
  ): Promise<void> {
    const schema = yup.object({
      nome: yup.string()
        .required('Campo "nome" é string e obrigatório'),
      email: yup.string()
        .required('Campo "email" é string e obrigatório')
        .email('Campo "email" deve ser um email válido'),
      senha: yup.string()
        .required('Campo "senha" é string e obrigatório'),
      telefone: yup.string()
        .required('Campo "telefone" é string e obrigatório'),
      id_permissao: yup.number()
        .required('Campo "id_permissao" é string e obrigatório'),
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
        email,
        senha,
        telefone,
      } = req.body as TUsuario;

      req.body.nome = nome.trim()
        .toLowerCase();
      req.body.email = email.trim()
        .toLowerCase();
      req.body.senha = senha.trim();
      req.body.telefone = telefone.trim()
        .toLowerCase()
        .replace('(', '')
        .replace(')', '')
        .replace('-', '')
        .replace(' ', '');

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
      email,
    } = req.body as TUsuario;
    try {
      const usuario = await UsuarioModel.findOne({
        where: {
          nome,
          email,
        },
      });

      if (usuario) {
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
}