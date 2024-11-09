import { Request, Response } from "express";
import { PaisModel } from "../models/Pais.model";
import { Pais } from "../types/Pais.type";

export class PaisController {
  async adicionar(
    req: Request,
    res: Response
  ): Promise<void> {
    const { nome } = req.body;
    try {
      const novoPais = await new PaisModel(undefined, nome).adicionar();

      res.status(200).json({
        mensagem: 'País adicionado com sucesso',
        dados: novoPais,
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
      const paises = await new PaisModel().pegaTodos();
      res.status(200).json(paises);
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
      const pais = await new PaisModel(Number(id)).pegaUmPorId();
      res.status(200).json(pais);
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
    const { id } = req.params;
    const { nome } = req.body;
    try {
      await new PaisModel(Number(id), nome).atualizar();
      res.status(200).json({
        mensagem: 'País atualizado com sucesso',
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
    const { id } = req.params;
    try {
      await new PaisModel(Number(id)).deletar();
      res.status(200).json({
        mensagem: 'País deletado com sucesso',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }
}