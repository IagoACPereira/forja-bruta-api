import { knex } from "../config/conexaoDb";
import { IArtistaModel } from "../interfaces/Artista.interface";
import { TArtista } from "../types/Artista.type";

export class ArtistaModel implements IArtistaModel {
  id?: string | number | undefined;
  nome?: string | undefined;
  data_formacao?: Date | undefined;
  ativo?: boolean | undefined;
  descricao?: Text | undefined;
  url_imagem?: string | undefined;
  id_regiao?: string | number | undefined;
  async adicionar(): Promise<TArtista> {
    const novoArtista: Array<TArtista> = await knex.insert({
      nome: this.nome,
      data_formacao: this.data_formacao,
      ativo: this.ativo,
      descricao: this.descricao,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    }, '*')
      .into('artista');

    return novoArtista[0];
  }
  async pegaTodos(): Promise<Array<TArtista>> {
    const artistas: Array<TArtista> = await knex.select('*')
      .from<TArtista>('artista')
      .orderBy('id', 'asc');

    return artistas;
  }
  async pegaUmPorId(): Promise<TArtista> {
    const artista: TArtista | undefined = await knex.select('*')
      .from<TArtista>('artista')
      .where({
        id: this.id,
      })
      .first();

      if (!artista) {
        throw new Error('Não foi encontrado nenhum registro');
      }

      return artista;
  }
  async atualizar(): Promise<void> {
    await knex.update({
      nome: this.nome,
      data_formacao: this.data_formacao,
      ativo: this.ativo,
      descricao: this.descricao,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    })
      .from<TArtista>('artista')
      .where({
        id: this.id,
      });
  }
  async deletar(): Promise<void> {
    await knex.delete()
      .from<TArtista>('artista')
      .where({
        id: this.id,
      });
  }
}