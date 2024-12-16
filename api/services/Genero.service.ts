import { knex } from "../config/conexaoDb";
import { IGeneroService } from "../interfaces/Genero.interface";
import { DiscoModel } from "../models/Disco.model";
import { GeneroModel } from "../models/Genero.model";
import { TGenero } from "../types/Genero.type";

export class GeneroService implements IGeneroService {
  constructor(
    public id: number,
    public titulo: string,  
  ) {}

  async adicionar(): Promise<TGenero> {
    const novoGenero = await GeneroModel.create({
      titulo: this.titulo,  
    } as TGenero);

    return novoGenero;
  }

  async pegaTodos(): Promise<Array<TGenero>> {
    const generos = await GeneroModel.findAll();

    return generos as Array<TGenero>;
  }

  async pegaUmPorId(): Promise<TGenero> {
    const genero = await GeneroModel.findOne({
      where: {
        id: this.id,
      },
      include: [
        {
          model: DiscoModel,
          as: 'discos',
          attributes: ['id', 'titulo']
        }
      ]
    });

    if (!genero) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return genero as TGenero;
  }

  async atualizar(): Promise<void> {
    await GeneroModel.update({
      titulo: this.titulo,
    } as TGenero, {
      where: {
        id: this.id,
      },
    });
  }

  async deletar(): Promise<void> {
    await GeneroModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}