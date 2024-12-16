import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";
import { PaisModel } from "./Pais.model";

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
}, {
  sequelize,
  tableName: 'regiao',
  timestamps: false,
  freezeTableName: true,
});

PaisModel.hasMany(RegiaoModel, {
  foreignKey: 'id_pais',
  as: 'regioes',
});
RegiaoModel.belongsTo(PaisModel, {
  foreignKey: 'id_pais',
  as: 'pais',
});

// RegiaoModel.sync({ force: true });