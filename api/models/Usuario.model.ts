import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/conexaoDb';
import { PermissaoModel } from './Permissao.model';

export class UsuarioModel extends Model {
  id!: string;
  nome!: string;
  email!: string;
  telefone!: string;
  senha!: string;
  id_permissao!: string;
}

UsuarioModel.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_permissao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'usuario',
  timestamps: false,
  freezeTableName: true,
});

PermissaoModel.hasMany(UsuarioModel, {
  foreignKey: 'id_permissao',
  as: 'usuarios',
});
UsuarioModel.belongsTo(PermissaoModel, {
  foreignKey: 'id_permissao',
  as: 'permissao',
});

// UsuarioModel.sync({ force: true });