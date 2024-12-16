import { sequelize } from '../config/conexaoDb';
import { DataTypes, Model } from 'sequelize';
import { ArtistaModel } from './Artista.model';
import { GravadoraModel } from './Gravadora.model';
import { TipoModel } from './Tipo.model';
import { GeneroModel } from './Genero.model';

export class DiscoModel extends Model {
  id!: string;
  titulo!: string;
  data_lancamento!: Date;
  url_imagem!: string;
  id_artista!: string;
  id_gravadora!: string;
  id_tipo!: string;
  id_genero!: string;
}

DiscoModel.init({
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_lancamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  url_imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'disco',
  timestamps: false,
  freezeTableName: true,
});

ArtistaModel.hasMany(DiscoModel, {
  foreignKey: 'id_artista',
  as: 'discos',
});
DiscoModel.belongsTo(ArtistaModel, {
  foreignKey: 'id_artista',
  as: 'artista',
});
GravadoraModel.hasMany(DiscoModel, {
  foreignKey: 'id_gravadora',
  as: 'discos',
});
DiscoModel.belongsTo(GravadoraModel, {
  foreignKey: 'id_gravadora',
  as: 'gravadora',
});
TipoModel.hasMany(DiscoModel, {
  foreignKey: 'id_tipo',
  as: 'discos',
});
DiscoModel.belongsTo(TipoModel, {
  foreignKey: 'id_tipo',
  as: 'tipo',
});
GeneroModel.hasMany(DiscoModel, {
  foreignKey: 'id_genero',
  as: 'discos',
});
DiscoModel.belongsTo(GeneroModel, {
  foreignKey: 'id_genero',
  as: 'genero',
});

// DiscoModel.sync({ force: true });