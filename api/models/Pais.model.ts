import { knex } from "../config/conexaoDb";
import { Pais } from "../types/Pais.type";

export class PaisModel {
  #id;

  #nome;

  constructor(id?: number, nome?: string) {
    this.#id = id;
    this.#nome = nome;
  }

  async pegaTodos(): Promise<Array<Pais>> {
    const paises = await knex.select('*').from('pais');
    
    return paises;
  }
}