"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Faixa_controller_1 = require("../controllers/Faixa.controller");
const faixaController = new Faixa_controller_1.FaixaController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => faixaController.exibirTodos(req, res))
    .get('/', (req, res) => faixaController.exibirTodos(req, res))
    .get('/:id', (req, res) => faixaController.exibirTodos(req, res))
    .put('/:id', (req, res) => faixaController.exibirTodos(req, res))
    .delete('/:id', (req, res) => faixaController.exibirTodos(req, res));
//# sourceMappingURL=Faixa.router.js.map