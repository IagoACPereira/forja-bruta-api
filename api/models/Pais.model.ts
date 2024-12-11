import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";

export class PaisModel extends Model {
  public id!: number;
  public nome!: string;
}

PaisModel.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'pais',
  timestamps: false,
  freezeTableName: true,
});

// PaisModel.sync({ force: true });