"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroModel = void 0;
const sequelize_1 = require("sequelize");
const conexaoDb_1 = require("../config/conexaoDb");
class GeneroModel extends sequelize_1.Model {
}
exports.GeneroModel = GeneroModel;
GeneroModel.init({
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: conexaoDb_1.sequelize,
    tableName: 'genero',
    timestamps: false,
    freezeTableName: true,
});
//# sourceMappingURL=Genero.model.js.map