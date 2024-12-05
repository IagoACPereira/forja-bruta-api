"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravadoraModel = void 0;
const sequelize_1 = require("sequelize");
const conexaoDb_1 = require("../config/conexaoDb");
class GravadoraModel extends sequelize_1.Model {
}
exports.GravadoraModel = GravadoraModel;
GravadoraModel.init({
    nome: {
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
    tableName: 'gravadora',
    timestamps: false,
    freezeTableName: true,
});
//# sourceMappingURL=Gravadora.model.js.map