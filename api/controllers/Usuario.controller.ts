import { Request, Response } from "express";
import { PaisModel } from "../models/Pais.model";
import { 
  TResponseDelete, 
  TResponseErro, 
  TResponseGet, 
  TResponseGetId, 
  TResponsePost, 
  TResponsePut 
} from "../types/Response.type";
import { TRequestBody, TRequestParams } from "../types/Request.type";
import { ArtistaModel } from "../models/Artista.model";
import { TGravadora } from "../types/Gravadora.type";
import { GravadoraModel } from "../models/Gravadora.model";
import { TTipo } from "../types/Tipo.type";
import { TipoModel } from "../models/Tipo.model";
import { TDisco } from "../types/Disco.type";
import { DiscoModel } from "../models/Disco.model";
import { TFaixa } from "../types/Faixa.type";
import { FaixaModel } from "../models/Faixa.model";
import { TPermissao } from "../types/Permissao.type";
import { PermissaoModel } from "../models/Permissao.model";
import { TUsuario } from "../types/Usuario.type";
import { UsuarioModel } from "../models/Usuario.model";

export class UsuarioController {
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
      const novoUsuario = await new UsuarioModel(
        undefined,
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
      const usuarios = await new UsuarioModel().pegaTodos();
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
      const usuario = await new UsuarioModel(id).pegaUmPorId();
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
      await new UsuarioModel(
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
      await new UsuarioModel(id).deletar();
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