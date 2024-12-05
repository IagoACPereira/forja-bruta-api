import { ITipoModel } from "../interfaces/Tipo.interface";
import { TTipo } from "../types/Tipo.type";
export declare class TipoModel implements ITipoModel {
    id?: string | number | undefined;
    titulo?: string | undefined;
    constructor(id?: string | number | undefined, titulo?: string | undefined);
    adicionar(): Promise<TTipo>;
    pegaTodos(): Promise<Array<TTipo>>;
    pegaUmPorId(): Promise<TTipo>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
