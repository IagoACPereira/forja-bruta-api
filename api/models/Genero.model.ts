import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/conexaoDb';

export class GeneroModel extends Model {
  public id!: number;
  public titulo!: string;
}

GeneroModel.init({
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'genero',
  timestamps: false,
  freezeTableName: true,
});

// GeneroModel.sync({ force: true });
