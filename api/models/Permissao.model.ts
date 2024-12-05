import { knex } from "../config/conexaoDb";
import { IPermissaoModel } from "../interfaces/Permissao.interface";
import { TPermissao } from "../types/Permissao.type";

export class PermissaoModel implements IPermissaoModel {
  constructor(
    public id?: string | number | undefined,
    public titulo?: string | undefined,
    public descricao?: Text | undefined,
  ) {}

  async adicionar(): Promise<TPermissao> {
    const novaPermissao: Array<TPermissao> = await knex.insert({
      titulo: this.titulo,
      descricao: this.descricao,
    } as TPermissao, '*')
      .into('permissao');

    return novaPermissao[0];
  }

  async pegaTodos(): Promise<Array<TPermissao>> {
    const permissoes: Array<TPermissao> = await knex.select('*')
      .from<TPermissao>('permissao')
      .orderBy('id', 'asc');
    
    return permissoes;
  }

  async pegaUmPorId(): Promise<TPermissao> {
    const permissao: TPermissao | undefined = await knex.select('*')
      .from<TPermissao>('permissao')
      .where({ id: this.id })
      .first();

    if (!permissao) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return permissao;
  }

  async atualizar(): Promise<void> {
    await knex.update({
      titulo: this.titulo,
      descricao: this.descricao,
    } as TPermissao)
      .from<TPermissao>('permissao')
      .where({
        id: this.id,
      });  
  }

  async deletar(): Promise<void> {
    await knex.delete()
      .from<TPermissao>('permissao')
      .where({ 
        id: this.id, 
      });
  } 
}