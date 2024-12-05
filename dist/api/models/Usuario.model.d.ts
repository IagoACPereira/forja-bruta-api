import { IUsuarioModel } from "../interfaces/Usuario.interface";
import { TUsuario } from "../types/Usuario.type";
export declare class UsuarioModel implements IUsuarioModel {
    id?: string | number | undefined;
    nome?: string | undefined;
    email?: string | undefined;
    telefone?: string | undefined;
    senha?: string | undefined;
    id_permissao?: string | number | undefined;
    constructor(id?: string | number | undefined, nome?: string | undefined, email?: string | undefined, telefone?: string | undefined, senha?: string | undefined, id_permissao?: string | number | undefined);
    adicionar(): Promise<TUsuario>;
    pegaTodos(): Promise<Array<TUsuario>>;
    pegaUmPorId(): Promise<TUsuario>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
