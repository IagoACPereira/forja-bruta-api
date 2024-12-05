import { knex } from "../config/conexaoDb";
import { ITipoModel } from "../interfaces/Tipo.interface";
import { TTipo } from "../types/Tipo.type";

export class TipoModel implements ITipoModel {
  constructor(
    public id?: string | number | undefined,
    public titulo?: string | undefined,
  ) {}

  async adicionar(): Promise<TTipo> {
    const novoTipo: Array<TTipo> = await knex.insert({
      titulo: this.titulo,
    }, '*')
      .into('tipo');

    return novoTipo[0];
  }
  async pegaTodos(): Promise<Array<TTipo>> {
    const tipos = await knex.select('*')
      .from<TTipo>('tipo')
      .orderBy('id', 'asc');

    return tipos;
  }
  async pegaUmPorId(): Promise<TTipo> {
    const tipo: TTipo | undefined = await knex.select('*')
      .from<TTipo>('tipo')
      .first();

    if (!tipo) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return tipo;
  }
  async atualizar(): Promise<void> {
    await knex.update({
      titulo: this.titulo,
    })
      .from<TTipo>('tipo')
      .where({
        id: this.id,
      });
  }
  async deletar(): Promise<void> {
    await knex.delete()
      .from<TTipo>('tipo')
      .where({
        id: this.id,
      });
  }
}