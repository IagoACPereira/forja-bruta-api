import { knex } from "../config/conexaoDb";
import { IRegiaoModel } from "../interfaces/Regiao.interface";
import { TRegiao } from "../types/Regiao.type";

export class RegiaoModel implements IRegiaoModel {
  constructor(
    public id?: number | string | undefined,
    public estado?: string,
    public uf?: string,
    public id_pais?: number | string,
  ) {}
  
  async adicionar(): Promise<TRegiao> {
    const novaRegiao: Array<TRegiao> = await knex.insert({
      estado: this.estado,
      uf: this.uf,
      id_pais: this.id_pais,
    } as TRegiao, '*')
      .into('regiao');

    return novaRegiao[0];
  }

  async pegaTodos(): Promise<Array<TRegiao>> {
    const regioes: Array<TRegiao> = await knex.select([
      'regiao.id',
      'regiao.estado',
      'regiao.uf',
      'pais.nome as pais',
    ])
      .from<TRegiao>('regiao')
      .innerJoin('pais', 'pais.id', 'regiao.id_pais')
      .orderBy('regiao.id', 'asc');

    return regioes;
  }

  async pegaUmPorId(): Promise<TRegiao> {
    const regiao: TRegiao | undefined = await knex.select([
      'regiao.id',
      'regiao.estado',
      'regiao.uf',
      'pais.nome as pais',
    ])
      .from<TRegiao>('regiao')
      .innerJoin('pais', 'pais.id', 'regiao.id_pais')
      .where('regiao.id', this.id)
      .first();

    if (!regiao) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return regiao;
  }


  async atualizar(): Promise<void> {
    await knex.update({
      estado: this.estado,
      uf: this.uf,
      id_pais: this.id_pais,
    } as TRegiao)
      .from<TRegiao>('regiao')
      .where({
        id: this.id,
      });

  }
  async deletar(): Promise<void> {
    await knex.delete()
      .from<TRegiao>('regiao')
      .where({
        id: this.id,
      });
  }
}