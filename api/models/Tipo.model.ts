import { sequelize } from "../config/conexaoDb";
import { DataTypes, Model } from "sequelize";

export class TipoModel extends Model {
  id!: string;
  titulo!: string;
}

TipoModel.init({
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'tipo',
  timestamps: false,
  freezeTableName: true,
})