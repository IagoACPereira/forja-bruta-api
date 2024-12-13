import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export class PaisMiddleware {
  constructor(
    private validacoes: Array<ValidationChain>,
  ) {
    this.validacoes = [
      body('nome').notEmpty().withMessage('Campo nome é obrigatório'),
    ];
  }

  validaBody(req: Request, res: Response, next: NextFunction): void {
    const resultado = validationResult(req);
    try {
      if (resultado.isEmpty()) {
        throw new Error('Erro de validação');
      }
      next();
    } catch (error) {
      res.status(400).json({
        mensagem: error,
        statusCode: 400,
      });
    }
  }

  pegaValidacoes(): Array<ValidationChain> {
    return this.validacoes;
  }
}