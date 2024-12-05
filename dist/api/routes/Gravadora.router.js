"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Gravadora_controller_1 = require("../controllers/Gravadora.controller");
const gravadoraController = new Gravadora_controller_1.GravadoraController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => gravadoraController.exibirTodos(req, res))
    .get('/', (req, res) => gravadoraController.exibirTodos(req, res))
    .get('/:id', (req, res) => gravadoraController.exibirTodos(req, res))
    .put('/:id', (req, res) => gravadoraController.exibirTodos(req, res))
    .delete('/:id', (req, res) => gravadoraController.exibirTodos(req, res));
//# sourceMappingURL=Gravadora.router.js.map