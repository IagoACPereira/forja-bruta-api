import { Request, Response } from "express";
import { 
  TResponseDelete, 
  TResponseErro, 
  TResponseGet, 
  TResponseGetId, 
  TResponsePost, 
  TResponsePut 
} from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { TUsuario } from "../types/Usuario.type";
import { IUsuarioController } from "../interfaces/Usuario.interface";
import { UsuarioService } from "../services/Usuario.service";

export class UsuarioController implements IUsuarioController {
  async adicionar(
    req: Request<{},{},TRequestBody.Usuario>,
    res: Response<TResponsePost.Usuario | TResponseErro>
  ): Promise<void> {
    const {
      email,
      id_permissao,
      nome,
      senha,
      telefone,
    } = req.body as TUsuario;
    try {
      const novoUsuario = await new UsuarioService(
        0,
        nome,
        email,
        telefone,
        senha,
        id_permissao,
      ).adicionar();

      res.status(201).json({
        mensagem: 'Usuário adicionado com sucesso',
        dados: novoUsuario,
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
    res: Response<TResponseGet.Usuario | TResponseErro>
  ): Promise<void> {
    try {
      const usuarios = await new UsuarioService(
        0,
        '',
        '',
        '',
        '',
        0,
      ).pegaTodos();
      res.status(200).json({
        usuarios,
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
    req: Request<TRequestParams.Usuario>,
    res: Response<TResponseGetId.Usuario | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      const usuario = await new UsuarioService(
        id,
        '',
        '',
        '',
        '',
        0,
      ).pegaUmPorId();
      res.status(200).json({
        usuario,
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
    req: Request<TRequestParams.Usuario, {}, TRequestBody.Usuario>,
    res: Response<TResponsePut | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    const {
      email,
      id_permissao,
      nome,
      senha,
      telefone,
    } = req.body as TUsuario;
    try {
      await new UsuarioService(
        id,
        nome,
        email,
        telefone,
        senha,
        id_permissao,
      ).atualizar();
      res.status(200).json({
        mensagem: 'Usuário atualizado com sucesso',
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
    req: Request<TRequestParams.Usuario>,
    res: Response<TResponseDelete | TResponseErro>
  ): Promise<void> {
    const { id } = req.params;
    try {
      await new UsuarioService(
        id,
        '',
        '',
        '',
        '',
        0,
      ).deletar();
      res.status(200).json({
        mensagem: 'Usuário deletado com sucesso',
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