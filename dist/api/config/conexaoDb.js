"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.knex = void 0;
const knex_1 = __importDefault(require("knex"));
const sequelize_1 = require("sequelize");
const config = {
    client: process.env.CLIENTE_DB,
    connection: {
        host: process.env.HOST_DB,
        port: Number(process.env.PORTA_DB),
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.DATABASE,
    },
    pool: { min: 0, max: 10 },
};
exports.knex = (0, knex_1.default)(config);
exports.sequelize = new sequelize_1.Sequelize(String(process.env.DATABASE), String(process.env.USER_DB), process.env.PASSWORD_DB, {
    host: process.env.HOST_DB,
    port: Number(process.env.PORTA_DB),
    dialect: 'postgres',
});
//# sourceMappingURL=conexaoDb.js.map