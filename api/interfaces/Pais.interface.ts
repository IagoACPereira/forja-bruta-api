import { TPais } from "../types/Pais.type";

export interface IPaisModel {
  id?: number | string;
  nome?: string;
  adicionar(): Promise<TPais>;
  pegaTodos(): Promise<Array<TPais>>;
  pegaUmPorId(): Promise<TPais>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}