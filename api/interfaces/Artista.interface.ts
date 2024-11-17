import { TArtista } from "../types/Artista.type";

export interface IArtista {
  id?: number | string;
  nome?: string;
  data_formacao?: Date;
  ativo?: boolean;
  descricao?: Text;
  url_imagem?: string;
  id_regiao?: number | string;
  adicionar(): Promise<TArtista>;
  pegaTodos(): Promise<Array<TArtista>>;
  pegaUmPorId(): Promise<TArtista>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}