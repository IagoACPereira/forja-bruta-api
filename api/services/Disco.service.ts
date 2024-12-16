import { IDiscoService } from "../interfaces/Disco.interface";
import { ArtistaModel } from "../models/Artista.model";
import { DiscoModel } from "../models/Disco.model";
import { FaixaModel } from "../models/Faixa.model";
import { GeneroModel } from "../models/Genero.model";
import { GravadoraModel } from "../models/Gravadora.model";
import { TipoModel } from "../models/Tipo.model";
import { TDisco } from "../types/Disco.type";

export class DiscoService implements IDiscoService {
  constructor(
    public id: string | number,
    public titulo: string,
    public data_lancamento: Date,
    public url_imagem: string,
    public id_artista: string | number,
    public id_gravadora: string | number,
    public id_tipo: string | number,
    public id_genero: string | number,
  ) {}
  
  async adicionar(): Promise<TDisco> {
    const disco = await DiscoModel.create({
      data_lancamento: this.data_lancamento,
      id_artista: this.id_artista,
      id_gravadora: this.id_gravadora,
      id_tipo: this.id_tipo,
      titulo: this.titulo,
      url_imagem: this.url_imagem,
      id_genero: this.id_genero,
    } as TDisco);

    return disco as TDisco;
  }

  async pegaTodos(): Promise<Array<TDisco>> {
    const discos = await DiscoModel.findAll({
      attributes: ['id', 'titulo', 'data_lancamento', 'url_imagem'],
      include: [
        {
          model: ArtistaModel,
          attributes: ['id', 'nome'],
          as: 'artista',
        },
        {
          model: GravadoraModel,
          attributes: ['id', 'nome'],
          as: 'gravadora',
        },
        {
          model: TipoModel,
          attributes: ['id', 'titulo'],
          as: 'tipo',
        },
        {
          model: GeneroModel,
          attributes: ['id', 'titulo'],
          as: 'genero',
        },
      ],
    });

    return discos as Array<TDisco>;
  }

  async pegaUmPorId(): Promise<TDisco> {
    const disco = await DiscoModel.findOne({
      where: {
        id: this.id,
      },
      attributes: ['id', 'titulo', 'data_lancamento', 'url_imagem'],
      include: [
        {
          model: ArtistaModel,
          attributes: ['id', 'nome'],
          as: 'artista',
        },
        {
          model: GravadoraModel,
          attributes: ['id', 'nome'],
          as: 'gravadora',
        },
        {
          model: TipoModel,
          attributes: ['id', 'titulo'],
          as: 'tipo',
        },
        {
          model: GeneroModel,
          attributes: ['id', 'titulo'],
          as: 'genero',
        },
        {
          model: FaixaModel,
          attributes: ['id', 'titulo', 'duracao', 'num_faixa', 'letra'],
          as: 'faixas',
        }
      ],
    });

    if (!disco) {
      throw new Error('Não foi encontrado nenhum registro')
    }

    return disco as TDisco;
  }

  async atualizar(): Promise<void> {
    await DiscoModel.update({
      data_lancamento: this.data_lancamento,
      id_artista: this.id_artista,
      id_gravadora: this.id_gravadora,
      id_tipo: this.id_tipo,
      titulo: this.titulo,
      url_imagem: this.url_imagem,
    } as TDisco, {
      where: {
        id: this.id,
      },
    });
  }
  
  async deletar(): Promise<void> {
    await DiscoModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}