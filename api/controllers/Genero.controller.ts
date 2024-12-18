import { Request, Response } from "express";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TResponseDelete, TResponseErro, TResponseGet, TResponseGetId, TResponsePost, TResponsePut } from "../types/Response.type";

import { IGeneroController } from "../interfaces/Genero.interface";
import { GeneroService } from "../services/Genero.service";

export class GeneroController implements IGeneroController {
  async adicionar(
    req: Request<{}, {}, TRequestBody.Genero>,
    res: Response<TResponsePost.Genero | TResponseErro>
  ): Promise<void> {
    const {
      titulo
    } = req.body;
    try {
      const novoGenero = await new GeneroService(
        0, 
        titulo,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Gênero adicionado com sucesso',
        dados: novoGenero,
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
    res: Response<TResponseGet.Genero | TResponseErro>
  ): Promise<void> {
    try {
      const generos = await new GeneroService(
        0,
        '',
      ).pegaTodos();
      res.status(200).json({
        generos,
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
    req: Request<TRequestParams.Genero>,
    res: Response<TResponseGetId.Genero | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const genero = await new GeneroService(
        Number(id),
        '',
      ).pegaUmPorId()
      res.status(200).json({
        genero,
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
    req: Request<TRequestParams.Genero, {}, TRequestBody.Genero>,
    res: Response<TResponsePut>
  ): Promise<void> {
    const { id } = req.params;
    const {
      titulo
    } = req.body;
    try {
      await new GeneroService(
        Number(id), 
        titulo,
      ).atualizar();

      res.status(200).json({
        mensagem: 'Gênero atualizado com sucesso',
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
    req: Request<TRequestParams.Genero, {}, TRequestBody.Genero>,
    res: Response<TResponseDelete>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new GeneroService(
        Number(id),
        '',
      ).deletar();

      res.status(200).json({
        mensagem: 'Gênero deletado com sucesso',
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