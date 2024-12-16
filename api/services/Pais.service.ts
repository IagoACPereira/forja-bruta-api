import { IPaisService } from "../interfaces/Pais.interface";
import { PaisModel } from "../models/Pais.model";
import { RegiaoModel } from "../models/Regiao.model";
import { TPais } from "../types/Pais.type";

export class PaisService implements IPaisService {
  constructor(
    public id: number,
    public nome: string,
  ) {}

  async adicionar(): Promise<TPais> {
    const novoPais = await PaisModel.create({
      nome: this.nome,
    });

    return novoPais as TPais;
  }

  async pegaTodos(): Promise<Array<TPais>> {
    const paises: Array<TPais> = await PaisModel.findAll();
    return paises;
  }

  async pegaUmPorId(): Promise<TPais> {
    const pais = await PaisModel.findOne({
      where: {
        id: this.id,
      },
      include: [
        {
          model: RegiaoModel,
          as: 'regioes',
          attributes: ['id', 'estado', 'uf'],
        },
      ],
    });

    if (!pais) {
      throw new Error('Não foi encontrado nenhum registro');
    }
    
    return pais as TPais;
  }

  async atualizar(): Promise<void> {
    await PaisModel.update({
      nome: this.nome,
    }, {
      where: {
        id: this.id,
      }
    });
  }

  async deletar(): Promise<void> {
    await PaisModel.destroy({
      where: {
        id: this.id,
      }
    });
  }
}