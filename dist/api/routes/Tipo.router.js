"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Tipo_controller_1 = require("../controllers/Tipo.controller");
const tipoController = new Tipo_controller_1.TipoController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => tipoController.exibirTodos(req, res))
    .get('/', (req, res) => tipoController.exibirTodos(req, res))
    .get('/:id', (req, res) => tipoController.exibirTodos(req, res))
    .put('/:id', (req, res) => tipoController.exibirTodos(req, res))
    .delete('/:id', (req, res) => tipoController.exibirTodos(req, res));
//# sourceMappingURL=Tipo.router.js.map