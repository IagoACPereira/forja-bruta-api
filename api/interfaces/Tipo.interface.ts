import { TTipo } from "../types/Tipo.type";

export interface ITipoModel {
  id?: number | string;
  titulo?: string;
  adicionar(): Promise<TTipo>;
  pegaTodos(): Promise<Array<TTipo>>;
  pegaUmPorId(): Promise<TTipo>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}
