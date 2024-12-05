import { IDiscoModel } from "../interfaces/Disco.interface";
import { TDisco } from "../types/Disco.type";
export declare class DiscoModel implements IDiscoModel {
    id?: string | number | undefined;
    titulo?: string | undefined;
    data_lancamento?: Date | undefined;
    url_imagem?: string | undefined;
    id_artista?: string | number | undefined;
    id_gravadora?: string | number | undefined;
    id_tipo?: string | number | undefined;
    constructor(id?: string | number | undefined, titulo?: string | undefined, data_lancamento?: Date | undefined, url_imagem?: string | undefined, id_artista?: string | number | undefined, id_gravadora?: string | number | undefined, id_tipo?: string | number | undefined);
    adicionar(): Promise<TDisco>;
    pegaTodos(): Promise<Array<TDisco>>;
    pegaUmPorId(): Promise<TDisco>;
    atualizar(): Promise<void>;
    deletar(): Promise<void>;
}
