import { TGenero } from "../types/Genero.type";

export interface IGeneroModel {
  id?: number | string;
  titulo?: string;
  adicionar(): Promise<TGenero>;
  pegaTodos(): Promise<Array<TGenero>>;
  pegaUmPorId(): Promise<TGenero>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}