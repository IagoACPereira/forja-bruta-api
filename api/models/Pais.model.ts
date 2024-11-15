import { knex } from "../config/conexaoDb";
import { TPais } from "../types/Pais.type";

export class PaisModel {
  #id;

  #nome;

  constructor(id?: number, nome?: string) {
    this.#id = id;
    this.#nome = nome;
  }

  async adicionar(): Promise<TPais> {
    const novoPais: Array<TPais> = await knex.insert({
      nome: this.#nome,
    }, '*')
      .into('pais');

    return novoPais[0];
  }

  async pegaTodos(): Promise<Array<TPais>> {
    const paises: Array<TPais> = await knex.select('*')
      .from('pais')
      .orderBy('id', 'asc');
    
    return paises;
  }

  async pegaUmPorId(): Promise<TPais> {
    const pais: TPais | undefined = await knex.select('*')
      .from<TPais>('pais')
      .where({ id: this.#id })
      .first();

    if (!pais) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return pais;
  }

  async atualizar(): Promise<void> {
    await knex.update({
      nome: this.#nome
    }, '*')
      .from('pais')
      .where({
        id: this.#id,
      });  
  }

  async deletar(): Promise<void> {
    await knex.delete()
      .from('pais')
      .where({ 
        id: this.#id 
      });
  }
}