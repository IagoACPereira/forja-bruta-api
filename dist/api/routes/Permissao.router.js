"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Permissao_controller_1 = require("../controllers/Permissao.controller");
const permissaoController = new Permissao_controller_1.PermissaoController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => permissaoController.exibirTodos(req, res))
    .get('/', (req, res) => permissaoController.exibirTodos(req, res))
    .get('/:id', (req, res) => permissaoController.exibirTodos(req, res))
    .put('/:id', (req, res) => permissaoController.exibirTodos(req, res))
    .delete('/:id', (req, res) => permissaoController.exibirTodos(req, res));
//# sourceMappingURL=Permissao.router.js.map