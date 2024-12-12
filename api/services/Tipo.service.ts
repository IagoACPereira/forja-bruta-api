import { knex } from "../config/conexaoDb";
import { IRegiaoService } from "../interfaces/Regiao.interface";
import { ITipoService } from "../interfaces/Tipo.interface";
import { RegiaoModel } from "../models/Regiao.model";
import { TipoModel } from "../models/Tipo.model";
import { TTipo } from "../types/Tipo.type";

export class TipoService implements ITipoService {
  constructor(
    public id: number | string,
    public titulo: string,
  ) {}
  
  async adicionar(): Promise<TTipo> {
    const novoTipo = await TipoModel.create({
      titulo: this.titulo,
    } as TTipo);

    return novoTipo as TTipo;
  }

  async pegaTodos(): Promise<Array<TTipo>> {
    const tipos = await TipoModel.findAll();

    return tipos as Array<TTipo>;
  }

  async pegaUmPorId(): Promise<TTipo> {
    const tipo = await TipoModel.findOne({
      where: {
        id: this.id,
      },
    });

    if (!tipo) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return tipo as TTipo;
  }


  async atualizar(): Promise<void> {
    await TipoModel.update({
      titulo: this.titulo,
    } as TTipo, {
      where: {
        id: this.id,
      },
    });
  }

  async deletar(): Promise<void> {
    await TipoModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}