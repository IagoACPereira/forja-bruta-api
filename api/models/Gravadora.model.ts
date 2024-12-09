import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";

export class GravadoraModel extends Model {
  public id!: number;
  public nome!: string;
  public url_imagem!: string;
  public id_regiao!: number;
}

GravadoraModel.init({
  nome: {
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
  tableName: 'gravadora',
  timestamps: false,
  freezeTableName: true,
});

// GravadoraModel.sync({ force: true });