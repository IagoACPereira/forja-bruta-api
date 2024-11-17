import { TPermissao } from "../types/Permissao.type";

export interface IPermissaoModel {
  id?: number | string;
  titulo?: string;
  descricao?: Text;
  adicionar(): Promise<TPermissao>;
  pegaTodos(): Promise<Array<TPermissao>>;
  pegaUmPorId(): Promise<TPermissao>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}