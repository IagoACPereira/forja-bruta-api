"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Genero_controller_1 = require("../controllers/Genero.controller");
const generoController = new Genero_controller_1.GeneroController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => generoController.adicionar(req, res))
    .get('/', (req, res) => generoController.exibirTodos(req, res))
    .get('/:id', (req, res) => generoController.exibirUm(req, res))
    .put('/:id', (req, res) => generoController.atualizar(req, res))
    .delete('/:id', (req, res) => generoController.deletar(req, res));
//# sourceMappingURL=Genero.router.js.map