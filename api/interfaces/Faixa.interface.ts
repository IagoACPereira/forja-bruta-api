import { TFaixa } from "../types/Faixa.type";

export interface IFaixaModel {
  id?: number | string;
  titulo?: string;
  duracao?: number | string;
  num_faixa?: number | string;
  letra?: Text;
  id_disco?: number | string;
  adicionar(): Promise<TFaixa>;
  pegaTodos(): Promise<Array<TFaixa>>;
  pegaUmPorId(): Promise<TFaixa>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}