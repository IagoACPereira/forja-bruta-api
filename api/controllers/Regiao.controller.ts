import { Request, Response } from "express";
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
import { IRegiaoController } from "../interfaces/Regiao.interface";
import { RegiaoService } from "../services/Regiao.service";

export class RegiaoController implements IRegiaoController {
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
      const novaRegiao: TRegiao = await new RegiaoService(
        0, 
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
      const regioes = await new RegiaoService(
        0,
        '',
        '',
        0,
      ).pegaTodos();

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
      const regiao: TRegiao = await new RegiaoService(
        Number(id),
        '',
        '',
        0,
      ).pegaUmPorId();
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
    const {
      estado,
      uf,
      id_pais,
    } = req.body;
    const { id } = req.params;
    try {
      await new RegiaoService(
        id,
        estado,
        uf,
        id_pais
      ).atualizar();

      res.status(200).json({
        mensagem: 'Região atualizada com sucesso',
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
    const { id } = req.params;
    try {
      await new RegiaoService(
        id,
        '',
        '',
        0,
      ).deletar();

      res.status(200).json({
        mensagem: 'Região deletada com sucesso',
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