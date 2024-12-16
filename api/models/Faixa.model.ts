import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/conexaoDb';
import { DiscoModel } from './Disco.model';

export class FaixaModel extends Model {
  id!: string;
  titulo!: string;
  duracao!: string;
  num_faixa!: string;
  letra!: string;
  id_disco!: string;
}

FaixaModel.init({
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  num_faixa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  letra: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_disco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'faixa',
  timestamps: false,
  freezeTableName: true,
});

DiscoModel.hasMany(FaixaModel, {
  foreignKey: 'id_disco',
  as: 'faixas',
});
FaixaModel.belongsTo(DiscoModel, {
  foreignKey: 'id_disco',
  as: 'disco',
});

// FaixaModel.sync({ force: true });