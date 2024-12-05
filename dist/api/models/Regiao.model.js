"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegiaoModel = void 0;
const sequelize_1 = require("sequelize");
const conexaoDb_1 = require("../config/conexaoDb");
const Pais_model_1 = require("./Pais.model");
class RegiaoModel extends sequelize_1.Model {
}
exports.RegiaoModel = RegiaoModel;
RegiaoModel.init({
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    uf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id_pais: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: conexaoDb_1.sequelize,
    tableName: 'regiao',
    timestamps: false,
    freezeTableName: true,
});
Pais_model_1.PaisModel.hasMany(RegiaoModel, {
    foreignKey: 'id_pais',
});
RegiaoModel.belongsTo(Pais_model_1.PaisModel, {
    foreignKey: 'id_pais',
});
//# sourceMappingURL=Regiao.model.js.map