import { TDisco } from "../types/Disco.type";

export interface IDisco {
  id?: number | string;
  titulo?: string;
  data_lancamento?: Date;
  url_imagem?: string;
  id_artista?: number | string;
  id_gravadora?: number | string;
  id_tipo?: number | string;
  adicionar(): Promise<TDisco>;
  pegaTodos(): Promise<Array<TDisco>>;
  pegaUmPorId(): Promise<TDisco>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}