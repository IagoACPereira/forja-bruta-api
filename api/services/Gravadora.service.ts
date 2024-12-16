import { knex } from "../config/conexaoDb";
import { IGravadoraService } from "../interfaces/Gravadora.interface";
import { DiscoModel } from "../models/Disco.model";
import { GravadoraModel } from "../models/Gravadora.model";
import { RegiaoModel } from "../models/Regiao.model";
import { TGravadora } from "../types/Gravadora.type";

export class GravadoraService implements IGravadoraService {
  constructor(
    public id: number,
    public nome: string,
    public url_imagem: string,
    public id_regiao: number,
  ) {}

  async adicionar(): Promise<TGravadora> {
    const novaGravadora = await GravadoraModel.create({
      nome: this.nome,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    } as TGravadora)

    return novaGravadora as TGravadora;
  }
  async pegaTodos(): Promise<Array<TGravadora>> {
    const gravadoras = await GravadoraModel.findAll({
      attributes: ['id', 'nome', 'url_imagem'],
      include: [
        {
          model: RegiaoModel,
          attributes: ['id', 'estado', 'uf'],
          as: 'regiao',
        },
      ],
    });

    return gravadoras as Array<TGravadora>;
  }
  async pegaUmPorId(): Promise<TGravadora> {
    const gravadora = await GravadoraModel.findOne({
      where: {
        id: this.id,
      },
      attributes: ['id', 'nome', 'url_imagem'],
      include: [
        {
          model: RegiaoModel,
          attributes: ['id', 'estado', 'uf'],
          as: 'regiao',
        },
        {
          model: DiscoModel,
          attributes: ['id', 'titulo', 'data_lancamento', 'url_imagem'],
          as: 'discos',
        }
      ],
    });

      if (!gravadora) {
        throw new Error('Não foi encontrado nenhum registro');
      }

    return gravadora as TGravadora;
  }
  async atualizar(): Promise<void> {
    await GravadoraModel.update({
      nome: this.nome,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    } as TGravadora, {
      where: {
        id: this.id,
      },
    });
  }
  async deletar(): Promise<void> {
    await GravadoraModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}