import { knex } from "../config/conexaoDb";
import { IRegiaoService } from "../interfaces/Regiao.interface";
import { RegiaoModel } from "../models/Regiao.model";
import { TRegiao } from "../types/Regiao.type";

export class RegiaoService implements IRegiaoService {
  constructor(
    public id: number,
    public estado: string,
    public uf: string,
    public id_pais: number,
  ) {}
  
  async adicionar(): Promise<TRegiao> {
    const novaRegiao = await RegiaoModel.create({
      estado: this.estado,
      uf: this.uf,
      id_pais: this.id_pais
    } as TRegiao);

    return novaRegiao as TRegiao;
  }

  async pegaTodos(): Promise<Array<TRegiao>> {
    const regioes = await RegiaoModel.findAll();

    return regioes as Array<TRegiao>;
  }

  async pegaUmPorId(): Promise<TRegiao> {
    const regiao = await RegiaoModel.findOne({
      where: {
        id: this.id,
      },
    });

    if (!regiao) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return regiao as TRegiao;
  }


  async atualizar(): Promise<void> {
    await RegiaoModel.update({
      estado: this.estado,
      uf: this.uf,
      id_pais: this.id_pais,
    } as TRegiao, {
      where: {
        id: this.id,
      },
    });
  }
  async deletar(): Promise<void> {
    await RegiaoModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}