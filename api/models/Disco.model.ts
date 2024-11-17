import { knex } from "../config/conexaoDb";
import { IDiscoModel } from "../interfaces/Disco.interface";
import { TDisco } from "../types/Disco.type";

export class DiscoModel implements IDiscoModel {
  id?: string | number | undefined;
  titulo?: string | undefined;
  data_lancamento?: Date | undefined;
  url_imagem?: string | undefined;
  id_artista?: string | number | undefined;
  id_gravadora?: string | number | undefined;
  id_tipo?: string | number | undefined;
  async adicionar(): Promise<TDisco> {
    const novoDisco: Array<TDisco> = await knex.insert({
      titulo: this.titulo,
      data_lancamento: this.data_lancamento,
      url_imagem: this.url_imagem,
      id_artista: this.id_artista,
      id_gravadora: this.id_gravadora,
      id_tipo: this.id_tipo,
    } as TDisco, '*')
      .into('disco');

    return novoDisco[0];
  }

  async pegaTodos(): Promise<Array<TDisco>> {
    const discos: Array<TDisco> = await knex.select('*')
      .from<TDisco>('discos')
      .orderBy('id', 'asc');
    
    return discos;
  }

  async pegaUmPorId(): Promise<TDisco> {
    const disco: TDisco | undefined = await knex.select('*')
      .from<TDisco>('disco')
      .where({ id: this.id })
      .first();

    if (!disco) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return disco;
  }

  async atualizar(): Promise<void> {
    await knex.update({
      titulo: this.titulo,
      data_lancamento: this.data_lancamento,
      url_imagem: this.url_imagem,
      id_artista: this.id_artista,
      id_gravadora: this.id_gravadora,
      id_tipo: this.id_tipo,
    } as TDisco)
      .from<TDisco>('disco')
      .where({
        id: this.id,
      });  
  }

  async deletar(): Promise<void> {
    await knex.delete()
      .from<TDisco>('disco')
      .where({ 
        id: this.id, 
      });
  }
}