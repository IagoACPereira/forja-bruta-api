"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaModel = void 0;
const sequelize_1 = require("sequelize");
const conexaoDb_1 = require("../config/conexaoDb");
class ArtistaModel extends sequelize_1.Model {
}
exports.ArtistaModel = ArtistaModel;
ArtistaModel.init({
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    data_formacao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ativo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    url_imagem: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id_regiao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: conexaoDb_1.sequelize,
    tableName: 'artista',
    timestamps: false,
    freezeTableName: true,
});
//# sourceMappingURL=Artista.model.js.map