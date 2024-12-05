"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_controller_1 = require("../controllers/Usuario.controller");
const usuarioController = new Usuario_controller_1.UsuarioController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => usuarioController.exibirTodos(req, res))
    .get('/', (req, res) => usuarioController.exibirTodos(req, res))
    .get('/:id', (req, res) => usuarioController.exibirTodos(req, res))
    .put('/:id', (req, res) => usuarioController.exibirTodos(req, res))
    .delete('/:id', (req, res) => usuarioController.exibirTodos(req, res));
//# sourceMappingURL=Usuario.router.js.map