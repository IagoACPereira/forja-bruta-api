import { TPermissao } from "../types/Permissao.type";

export interface IPermissao {
  id?: number | string;
  titulo: string;
  descircao: Text;
  adicionar(): Promise<TPermissao>;
  pegaTodos(): Promise<Array<TPermissao>>;
  pegaUmPorId(): Promise<TPermissao>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}