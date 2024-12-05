"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Regiao_controller_1 = require("../controllers/Regiao.controller");
const regiaoController = new Regiao_controller_1.RegiaoController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => regiaoController.adicionar(req, res))
    .get('/', (req, res) => regiaoController.exibirTodos(req, res))
    .get('/:id', (req, res) => regiaoController.exibirUm(req, res))
    .put('/:id', (req, res) => regiaoController.atualizar(req, res))
    .delete('/:id', (req, res) => regiaoController.deletar(req, res));
//# sourceMappingURL=Regiao.router.js.map