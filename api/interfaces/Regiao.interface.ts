import { TRegiao } from "../types/Regiao.type";

export interface IRegiaoModel {
  id?: number | string;
  estado?: string;
  uf?: string;
  id_pais?: number | string;
  adicionar(): Promise<TRegiao>;
  pegaTodos(): Promise<Array<TRegiao>>;
  pegaUmPorId(): Promise<TRegiao>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}