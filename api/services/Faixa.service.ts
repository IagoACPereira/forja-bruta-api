import { IFaixaService } from "../interfaces/Faixa.interface";
import { FaixaModel } from "../models/Faixa.model";
import { TFaixa } from "../types/Faixa.type";

export class FaixaService implements IFaixaService {
  constructor(
    public id: string | number,
    public titulo: string,
    public duracao: string | number,
    public num_faixa: string | number,
    public letra: string,
    public id_disco: string | number,
  ) {}
  
  async adicionar(): Promise<TFaixa> {
    return await FaixaModel.create({
      duracao: this.duracao,
      id_disco: this.id_disco,
      letra: this.letra,
      num_faixa: this.num_faixa,
      titulo: this.titulo,
    } as TFaixa) as TFaixa;
  }
  async pegaTodos(): Promise<Array<TFaixa>> {
    return await FaixaModel.findAll() as Array<TFaixa>;
  }
  async pegaUmPorId(): Promise<TFaixa> {
    const faixa = await FaixaModel.findOne({
      where: {
        id: this.id,
      },
    }) as TFaixa;

    if (!faixa) {
      throw new Error('Não foi encontrado nehum registro')
    }

    return faixa as TFaixa;
  }
  async atualizar(): Promise<void> {
    await FaixaModel.update({
      duracao: this.duracao,
      id_disco: this.id_disco,
      letra: this.letra,
      num_faixa: this.num_faixa,
      titulo: this.titulo,
    } as TFaixa, {
      where: {
        id: this.id,
      }
    });
  }
  async deletar(): Promise<void> {
    await FaixaModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}