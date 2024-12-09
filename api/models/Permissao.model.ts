import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/conexaoDb";

export class PermissaoModel extends Model {
  id!: string;
  titulo!: string;
  descricao!: Text;
}

PermissaoModel.init({
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'permissao',
  timestamps: false,
  freezeTableName: true,
});

// PermissaoModel.sync({ force: true });