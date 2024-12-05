import { IRegiaoService } from "../interfaces/Regiao.interface";
import { TRegiao } from "../types/Regiao.type";
export declare class RegiaoService implements IRegiaoService {
    id: number;
    estado: string;
    uf: string;
    id_pais: number;
    constructor(id: number, estado: string, uf: string, id_pais: number);
    adicionar(): Promise<TRegiao>;
    pegaTodos(): Promise<Array<TRegiao>>;
    pegaUmPorId(): Promise<TRegiao>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
