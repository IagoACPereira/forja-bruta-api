import { knex } from "../config/conexaoDb";
import { IUsuarioModel } from "../interfaces/Usuario.interface";
import { TUsuario } from "../types/Usuario.type";

export class UsuarioModel implements IUsuarioModel {
  constructor(
    public id?: string | number | undefined,
    public nome?: string | undefined,
    public email?: string | undefined,
    public telefone?: string | undefined,
    public senha?: string | undefined,
    public id_permissao?: string | number | undefined,
  ) {}

  async adicionar(): Promise<TUsuario> {
    const novoUsuario: Array<TUsuario> = await knex.insert({
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      senha: this.senha,
      id_permissao: this.id_permissao,
    } as TUsuario, '*')
      .into('permissao');

    return novoUsuario[0];
  }

  async pegaTodos(): Promise<Array<TUsuario>> {
    const usuarios: Array<TUsuario> = await knex.select('*')
      .from<TUsuario>('usuario')
      .orderBy('id', 'asc');
    
    return usuarios;
  }

  async pegaUmPorId(): Promise<TUsuario> {
    const usuario: TUsuario | undefined = await knex.select('*')
      .from<TUsuario>('usuario')
      .where({ id: this.id })
      .first();

    if (!usuario) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return usuario;
  }

  async atualizar(): Promise<void> {
    await knex.update({
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      senha: this.senha,
      id_permissao: this.id_permissao,
    } as TUsuario)
      .from<TUsuario>('usuario')
      .where({
        id: this.id,
      });  
  }

  async deletar(): Promise<void> {
    await knex.delete()
      .from<TUsuario>('usuario')
      .where({ 
        id: this.id, 
      });
  } 
}