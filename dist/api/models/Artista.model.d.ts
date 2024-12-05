import { Model } from "sequelize";
export declare class ArtistaModel extends Model {
    id: number;
    nome: string;
    data_formacao: Date;
    ativo: boolean;
    descricao: string;
    url_imagem: string;
    id_regiao: number;
}
