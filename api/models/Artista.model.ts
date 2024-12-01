import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";

export class ArtistaModel extends Model {
  public id!: number;
  public nome!: string;
  public data_formacao!: Date;
  public ativo!: boolean;
  public descricao!: string;
  public url_imagem!: string;
  public id_regiao!: number;
}

ArtistaModel.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_formacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ativo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_regiao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'artista',
  timestamps: false,
  freezeTableName: true,
});