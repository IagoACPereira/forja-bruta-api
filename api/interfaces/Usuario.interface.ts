import { TUsuario } from "../types/Usuario.type";

export interface IUsuario {
  id?: number | string;
  nome?: string;
  email?: string;
  telefone?: string;
  senha?: string;
  id_permissao?: number | string;
  adicionar(): Promise<TUsuario>;
  pegaTodos(): Promise<Array<TUsuario>>;
  pegaUmPorId(): Promise<TUsuario>;
  atualizar(): Promise<void>;
  deletar(): Promise<void>;
}