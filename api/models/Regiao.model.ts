import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";

export class RegiaoModel extends Model {
  public id!: number;
  public estado!: string;
  public uf!: string;
  public id_pais!: number;
}

RegiaoModel.init({
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_pais: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'regiao',
  timestamps: false,
  freezeTableName: true,
});