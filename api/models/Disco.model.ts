import { sequelize } from "../config/conexaoDb";
import { DataTypes, Model } from "sequelize";
import { ArtistaModel } from "./Artista.model";
import { GravadoraModel } from "./Gravadora.model";
import { TipoModel } from "./Tipo.model";

export class DiscoModel extends Model {
  id!: string;
  titulo!: string;
  data_lancamento!: Date;
  url_imagem!: string;
  id_artista!: string;
  id_gravadora!: string;
  id_tipo!: string;
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
});
DiscoModel.belongsTo(ArtistaModel, {
  foreignKey: 'id_artista',
});
GravadoraModel.hasMany(DiscoModel, {
  foreignKey: 'id_gravadora',
});
DiscoModel.belongsTo(GravadoraModel, {
  foreignKey: 'id_gravadora',
});
TipoModel.hasMany(DiscoModel, {
  foreignKey: 'id_tipo',
});
DiscoModel.belongsTo(TipoModel, {
  foreignKey: 'id_tipo',
});