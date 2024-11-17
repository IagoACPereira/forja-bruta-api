import { TGravadora } from "../types/Gravadora.type";

export interface IGravadora {
  id?: number | string;
  nome?: string;
  url_imagem?: string;
  id_regiao?: number | string;
  adicionar(): Promise<TGravadora>;
  pegaTodos(): Promise<Array<TGravadora>>;
  pegaUmPorId(): Promise<TGravadora>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}