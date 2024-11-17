import { knex } from "../config/conexaoDb";
import { IGeneroModel } from "../interfaces/Genero.interface";
import { TGenero } from "../types/Genero.type";

export class GeneroModel implements IGeneroModel {
  constructor(
    public id?: string | number | undefined,
    public titulo?: string,  
  ) {}

  async adicionar(): Promise<TGenero> {
    const novoGenero: Array<TGenero> = await knex.insert({
      titulo: this.titulo,
    }, '*')
      .into('genero');

    return novoGenero[0];
  }

  async pegaTodos(): Promise<Array<TGenero>> {
    const generos: Array<TGenero> = await knex.select('*')
      .from<TGenero>('genero')
      .orderBy('id', 'asc');

    return generos;
  }

  async pegaUmPorId(): Promise<TGenero> {
    const genero: TGenero | undefined = await knex.select('*')
      .from<TGenero>('genero')
      .where({
        id: this.id,
      })
      .first();

    if (!genero) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return genero;
  }

  async atualizar(): Promise<void> {
    await knex.update({
      titulo: this.titulo
    })
      .from<TGenero>('genero')
      .where({
        id: this.id,
      });
  }

  async deletar(): Promise<void> {
    await knex.delete()
      .from<TGenero>('genero')
      .where({
        id: this.id,
      });
  }
}