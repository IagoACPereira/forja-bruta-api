import { IArtistaService } from "../interfaces/Artista.interface";
import { TArtista } from "../types/Artista.type";
export declare class ArtistaService implements IArtistaService {
    id: number;
    nome: string;
    data_formacao: Date;
    ativo: boolean;
    descricao: string;
    url_imagem: string;
    id_regiao: number;
    constructor(id: number, nome: string, data_formacao: Date, ativo: boolean, descricao: string, url_imagem: string, id_regiao: number);
    adicionar(): Promise<TArtista>;
    pegaTodos(): Promise<Array<TArtista>>;
    pegaUmPorId(): Promise<TArtista>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
