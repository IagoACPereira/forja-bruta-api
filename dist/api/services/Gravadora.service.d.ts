import { IGravadoraService } from "../interfaces/Gravadora.interface";
import { TGravadora } from "../types/Gravadora.type";
export declare class GravadoraService implements IGravadoraService {
    id: number;
    nome: string;
    url_imagem: string;
    id_regiao: number;
    constructor(id: number, nome: string, url_imagem: string, id_regiao: number);
    adicionar(): Promise<TGravadora>;
    pegaTodos(): Promise<Array<TGravadora>>;
    pegaUmPorId(): Promise<TGravadora>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
