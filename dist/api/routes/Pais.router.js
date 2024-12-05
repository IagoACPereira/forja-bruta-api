"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Pais_controller_1 = require("../controllers/Pais.controller");
const paisController = new Pais_controller_1.PaisController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => paisController.adicionar(req, res))
    .get('/', (req, res) => paisController.exibirTodos(req, res))
    .get('/:id', (req, res) => paisController.exibirUm(req, res))
    .put('/:id', (req, res) => paisController.atualizar(req, res))
    .delete('/:id', (req, res) => paisController.deletar(req, res));
//# sourceMappingURL=Pais.router.js.map