import { Request, Response } from "express";
import { RegiaoModel } from "../models/Regiao.model";
import { TRegiao } from "../types/Regiao.type";
import { 
  TResponseDelete, 
  TResponseErro, 
  TResponseGet, 
  TResponseGetId, 
  TResponsePost, 
  TResponsePut 
} from "../types/Response.type";
import { 
  TRequestBody, 
  TRequestParams 
} from "../types/Request.type";

export class RegiaoController {
  async adicionar(
    req: Request<{},{},TRequestBody.Regiao>,
    res: Response<TResponsePost.Regiao | TResponseErro>
  ): Promise<void> {
    const {
      estado,
      uf,
      id_pais,
    } = req.body;
    try {
      const novaRegiao: TRegiao = await new RegiaoModel(
        undefined, 
        estado, 
        uf, 
        Number(id_pais),
      ).adicionar();

      res.status(201).json({
        mensagem: 'Região adicionada com sucesso',
        dados: novaRegiao,
        statusCode: 201,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async exibirTodos(
    req: Request,
    res: Response<TResponseGet.Regiao | TResponseErro>
  ): Promise<void> {
    try {
      const regioes = await new RegiaoModel().pegaTodos();

      res.status(200).json({
        regioes,
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async exibirUm(
    req: Request<TRequestParams.Regiao>,
    res: Response<TResponseGetId.Regiao | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const regiao: TRegiao = await new RegiaoModel(Number(id)).pegaUmPorId();
      res.status(200).json({
        regiao,
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async atualizar(
    req: Request<TRequestParams.Regiao, {}, TRequestBody.Regiao>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }

  async deletar(
    req: Request<TRequestParams.Regiao>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    try {
      res.status(200).json({
        mensagem: 'Em desenvolvimento',
        statusCode: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
        statusCode: 400,
      });
    }
  }
}