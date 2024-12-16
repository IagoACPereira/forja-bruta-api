import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";
import { RegiaoModel } from "./Regiao.model";

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
}, {
  sequelize,
  tableName: 'gravadora',
  timestamps: false,
  freezeTableName: true,
});

RegiaoModel.hasMany(GravadoraModel, {
  foreignKey: 'id_regiao',
  as: 'gravadoras',
});
GravadoraModel.belongsTo(RegiaoModel, {
  foreignKey: 'id_regiao',
  as: 'regiao',
});

// GravadoraModel.sync({ force: true });