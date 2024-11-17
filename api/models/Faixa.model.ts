import { knex } from "../config/conexaoDb";
import { IFaixaModel } from "../interfaces/Faixa.interface";
import { TFaixa } from "../types/Faixa.type";

export class FaixaModel implements IFaixaModel {
  id?: string | number | undefined;
  titulo?: string | undefined;
  duracao?: string | number | undefined;
  num_faixa?: string | number | undefined;
  letra?: Text | undefined;
  id_disco?: string | number | undefined;
  async adicionar(): Promise<TFaixa> {
    const novaFaixa: Array<TFaixa> = await knex.insert({
      titulo: this.titulo,
      duracao: this.duracao,
      num_faixa: this.num_faixa,
      letra: this.letra,
      id_disco: this.id_disco,
    } as TFaixa, '*')
      .into('faixa');

    return novaFaixa[0];
  }

  async pegaTodos(): Promise<Array<TFaixa>> {
    const faixas: Array<TFaixa> = await knex.select('*')
      .from<TFaixa>('faixa')
      .orderBy('id', 'asc');
    
    return faixas;
  }

  async pegaUmPorId(): Promise<TFaixa> {
    const faixa: TFaixa | undefined = await knex.select('*')
      .from<TFaixa>('faixa')
      .where({ id: this.id })
      .first();

    if (!faixa) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return faixa;
  }

  async atualizar(): Promise<void> {
    await knex.update({
      titulo: this.titulo,
      duracao: this.duracao,
      num_faixa: this.num_faixa,
      letra: this.letra,
      id_disco: this.id_disco,
    } as TFaixa)
      .from<TFaixa>('faixa')
      .where({
        id: this.id,
      });  
  }

  async deletar(): Promise<void> {
    await knex.delete()
      .from<TFaixa>('faixa')
      .where({ 
        id: this.id, 
      });
  }
}