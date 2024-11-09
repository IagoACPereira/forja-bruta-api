import { Request, Response } from "express";
import { RegiaoModel } from "../models/Regiao.model";
import { Regiao } from "../types/Regiao.type";

export class RegiaoController {
  async adicionar(
    req: Request,
    res: Response
  ): Promise<void> {
    const {
      estado,
      uf,
      id_pais,
    }: Regiao = req.body;
    try {
      const novaRegiao: Regiao = await new RegiaoModel(
        undefined, 
        estado, 
        uf, 
        id_pais
      ).adicionar();

      res.status(200).json({
        mensagem: 'Região adicionada com sucesso',
        dados: novaRegiao,
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
  ): Promise<void> {
    try {
      const regioes: Array<Regiao> = await new RegiaoModel().pegaTodos();

      res.status(200).json(regioes);
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async exibirUm(
    req: Request,
    res: Response
  ): Promise<void> {
    const { id } = req.params;
    try {
      const regiao: Regiao = await new RegiaoModel(Number(id)).pegaUmPorId();
      res.status(200).json(regiao);
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async atualizar(
    req: Request,
    res: Response
  ): Promise<void> {
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
  ): Promise<void> {
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