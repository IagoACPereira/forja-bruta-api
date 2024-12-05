import { IArtistaService } from "../interfaces/Artista.interface";
import { ArtistaModel } from "../models/Artista.model";
import { TArtista } from "../types/Artista.type";

export class ArtistaService implements IArtistaService {
  constructor(
    public id: number,
    public nome: string,
    public data_formacao: Date,
    public ativo: boolean,
    public descricao: string,
    public url_imagem: string,
    public id_regiao: number,
  ) {}
  
  async adicionar(): Promise<TArtista> {
    const novoArtista = await ArtistaModel.create({
      nome: this.nome,
      ativo: this.ativo,
      data_formacao: this.data_formacao,
      descricao: this.descricao,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    } as TArtista);

    return novoArtista as TArtista;
  }
  async pegaTodos(): Promise<Array<TArtista>> {
    const artistas = await ArtistaModel.findAll();

    return artistas as Array<TArtista>;
  }
  async pegaUmPorId(): Promise<TArtista> {
    const artista = await ArtistaModel.findOne({
      where: {
        id: this.id,
      },
    });

    if (!artista) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return artista as TArtista;
  }
  async atualizar(): Promise<void> {
    await ArtistaModel.update({
      nome: this.nome,
      ativo: this.ativo,
      data_formacao: this.data_formacao,
      descricao: this.descricao,
      url_imagem: this.url_imagem,
      id_regiao: this.id_regiao,
    } as TArtista, {
      where: {
        id: this.id,
      },
    });
  }
  async deletar(): Promise<void> {
    await ArtistaModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}