import { IDiscoService } from "../interfaces/Disco.interface";
import { DiscoModel } from "../models/Disco.model";
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
  ) {}
  
  async adicionar(): Promise<TDisco> {
    const disco = await DiscoModel.create({
      data_lancamento: this.data_lancamento,
      id_artista: this.id_artista,
      id_gravadora: this.id_gravadora,
      id_tipo: this.id_tipo,
      titulo: this.titulo,
      url_imagem: this.url_imagem,
    } as TDisco);

    return disco as TDisco;
  }
  async pegaTodos(): Promise<Array<TDisco>> {
    const discos = await DiscoModel.findAll();

    return discos as Array<TDisco>;
  }
  async pegaUmPorId(): Promise<TDisco> {
    const disco = await DiscoModel.findOne({
      where: {
        id: this.id,
      },
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