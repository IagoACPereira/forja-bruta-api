import { IFaixaModel } from "../interfaces/Faixa.interface";
import { TFaixa } from "../types/Faixa.type";
export declare class FaixaModel implements IFaixaModel {
    id?: string | number | undefined;
    titulo?: string | undefined;
    duracao?: string | number | undefined;
    num_faixa?: string | number | undefined;
    letra?: Text | undefined;
    id_disco?: string | number | undefined;
    constructor(id?: string | number | undefined, titulo?: string | undefined, duracao?: string | number | undefined, num_faixa?: string | number | undefined, letra?: Text | undefined, id_disco?: string | number | undefined);
    adicionar(): Promise<TFaixa>;
    pegaTodos(): Promise<Array<TFaixa>>;
    pegaUmPorId(): Promise<TFaixa>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
