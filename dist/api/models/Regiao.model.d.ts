import { Model } from "sequelize";
export declare class RegiaoModel extends Model {
    id: number;
    estado: string;
    uf: string;
    id_pais: number;
}
