import { knex } from "../config/conexaoDb";
import { IGravadoraModel } from "../interfaces/Gravadora.interface";
import { TGravadora } from "../types/Gravadora.type";

export class GravadoraModel implements IGravadoraModel {
  id?: string | number | undefined;
  nome?: string | undefined;
  url_imagem?: string | undefined;
  id_regiao?: string | number | undefined;
  async adicionar(): Promise<TGravadora> {
    const novaGravadora: Array<TGravadora> = await knex.insert({
      nome: this.nome,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    }, '*')
      .into('gravadora');

    return novaGravadora[0];
  }
  async pegaTodos(): Promise<Array<TGravadora>> {
    const gravadoras: Array<TGravadora> = await knex.select('*')
      .from<TGravadora>('gravadora')
      .orderBy('id', 'asc');

    return gravadoras;
  }
  async pegaUmPorId(): Promise<TGravadora> {
    const gravadora: TGravadora | undefined = await knex.select('*')
      .from<TGravadora>('gravadora')
      .where({
        id: this.id,
      })
      .first();

      if (!gravadora) {
        throw new Error('Não foi encontrado nenhum registro');
      }

    return gravadora;
  }
  async atualizar(): Promise<void> {
    await knex.update({
      nome: this.nome,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    })
      .from<TGravadora>('gravadora')
      .where({
        id: this.id,
      });
  }
  async deletar(): Promise<void> {
    await knex.delete()
      .from<TGravadora>('gravadora')
      .where({
        id: this.id,
      });
  }

}