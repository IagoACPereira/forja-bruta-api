import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/conexaoDb';
import { RegiaoModel } from './Regiao.model';

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
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url_imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'artista',
  timestamps: false,
  freezeTableName: true,
});

RegiaoModel.hasMany(ArtistaModel, {
  foreignKey: 'id_regiao',
  as: 'artistas',
});
ArtistaModel.belongsTo(RegiaoModel, {
  foreignKey: 'id_regiao',
});

// ArtistaModel.sync({ force: true });