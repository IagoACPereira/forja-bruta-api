import { IGeneroService } from "../interfaces/Genero.interface";
import { TGenero } from "../types/Genero.type";
export declare class GeneroService implements IGeneroService {
    id: number;
    titulo: string;
    constructor(id: number, titulo: string);
    adicionar(): Promise<TGenero>;
    pegaTodos(): Promise<Array<TGenero>>;
    pegaUmPorId(): Promise<TGenero>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
