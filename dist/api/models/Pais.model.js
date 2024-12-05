"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisModel = void 0;
const sequelize_1 = require("sequelize");
const conexaoDb_1 = require("../config/conexaoDb");
class PaisModel extends sequelize_1.Model {
}
exports.PaisModel = PaisModel;
PaisModel.init({
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: conexaoDb_1.sequelize,
    tableName: 'pais',
    timestamps: false,
    freezeTableName: true,
});
//# sourceMappingURL=Pais.model.js.map