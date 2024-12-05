import { IPermissaoModel } from "../interfaces/Permissao.interface";
import { TPermissao } from "../types/Permissao.type";
export declare class PermissaoModel implements IPermissaoModel {
    id?: string | number | undefined;
    titulo?: string | undefined;
    descricao?: Text | undefined;
    constructor(id?: string | number | undefined, titulo?: string | undefined, descricao?: Text | undefined);
    adicionar(): Promise<TPermissao>;
    pegaTodos(): Promise<Array<TPermissao>>;
    pegaUmPorId(): Promise<TPermissao>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
