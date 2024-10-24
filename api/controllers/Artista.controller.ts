import { Request, Response } from "express";

export class ArtistaController {
  async adicionar(
    req: Request,
    res: Response
  ) {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async exibirTodos(
    req: Request,
    res: Response
  ) {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async exibirUm(
    req: Request,
    res: Response
  ) {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async atualizar(
    req: Request,
    res: Response
  ) {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async deletar(
    req: Request,
    res: Response
  ) {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }
}