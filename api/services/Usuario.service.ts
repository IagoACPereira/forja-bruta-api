import { IUsuarioService } from "../interfaces/Usuario.interface";
import { UsuarioModel } from "../models/Usuario.model";
import { TUsuario } from "../types/Usuario.type";

export class UsuarioService implements IUsuarioService {
  constructor(
    public id: string | number,
    public nome: string,
    public email: string,
    public telefone: string,
    public senha: string,
    public id_permissao: string | number,
  ) {}

  async adicionar(): Promise<TUsuario> {
    return await UsuarioModel.create({
      email: this.email,
      id_permissao: this.id_permissao,
      nome: this.nome,
      senha: this.senha,
      telefone: this.telefone,
    } as TUsuario) as TUsuario;
  }
  async pegaTodos(): Promise<Array<TUsuario>> {
    return await UsuarioModel.findAll() as Array<TUsuario>;
  }
  async pegaUmPorId(): Promise<TUsuario> {
    const usuario = await UsuarioModel.findOne({
      where: {
        id: this.id,
      },
    });

    if (!usuario) {
      throw new Error('Não foi encontrado nenhum registro')
    }

    return usuario as TUsuario;
  }
  async atualizar(): Promise<void> {
    await UsuarioModel.update({
      email: this.email,
      id_permissao: this.id_permissao,
      nome: this.nome,
      senha: this.senha,
      telefone: this.telefone,
    } as TUsuario, {
      where: {
        id: this.id,
      },
    });
  }
  async deletar(): Promise<void> {
    await UsuarioModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}