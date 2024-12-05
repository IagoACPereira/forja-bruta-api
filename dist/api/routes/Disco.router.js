"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Disco_controller_1 = require("../controllers/Disco.controller");
const discoController = new Disco_controller_1.DiscoController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => discoController.exibirTodos(req, res))
    .get('/', (req, res) => discoController.exibirTodos(req, res))
    .get('/:id', (req, res) => discoController.exibirTodos(req, res))
    .put('/:id', (req, res) => discoController.exibirTodos(req, res))
    .delete('/:id', (req, res) => discoController.exibirTodos(req, res));
//# sourceMappingURL=Disco.router.js.map