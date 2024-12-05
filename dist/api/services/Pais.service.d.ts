import { IPaisService } from "../interfaces/Pais.interface";
import { TPais } from "../types/Pais.type";
export declare class PaisService implements IPaisService {
    id: number;
    nome: string;
    constructor(id: number, nome: string);
    adicionar(): Promise<TPais>;
    pegaTodos(): Promise<Array<TPais>>;
    pegaUmPorId(): Promise<TPais>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
