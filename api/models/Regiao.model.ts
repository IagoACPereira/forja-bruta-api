import { knex } from "../config/conexaoDb";
import { Regiao } from "../types/Regiao.type";

export class RegiaoModel {
  #id;

  #estado;

  #uf;

  #id_pais;

  constructor(
    id?: number,
    estado?: string,
    uf?: string,
    id_pais?: number,
  ) {
    this.#id = id; 
    this.#estado = estado; 
    this.#uf = uf; 
    this.#id_pais = id_pais; 
  }

  async adicionar(): Promise<Regiao> {
    const novaRegiao: Array<Regiao> = await knex.insert({
      estado: this.#estado,
      uf: this.#uf,
      id_pais: this.#id_pais,
    } as Regiao, '*')
      .into('regiao');

    return novaRegiao[0];
  }

  async pegaTodos(): Promise<Array<Regiao>> {
    const regioes: Array<Regiao> = await knex.select([
      'regiao.id',
      'regiao.estado',
      'regiao.uf',
      'pais.nome as pais',
    ])
      .from<Regiao>('regiao')
      .innerJoin('pais', 'pais.id', 'regiao.id_pais')
      .orderBy('regiao.id', 'asc');

    return regioes;
  }

  async pegaUmPorId(): Promise<Regiao> {
    const regiao: Regiao | undefined = await knex.select([
      'regiao.id',
      'regiao.estado',
      'regiao.uf',
      'pais.nome as pais',
    ])
      .from<Regiao>('regiao')
      .innerJoin('pais', 'pais.id', 'regiao.id_pais')
      .where('regiao.id', this.#id)
      .first();

    if (!regiao) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return regiao;
  }
}