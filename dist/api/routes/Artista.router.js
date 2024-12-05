"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Artista_controller_1 = require("../controllers/Artista.controller");
const artistaController = new Artista_controller_1.ArtistaController();
exports.default = (0, express_1.Router)()
    .post('/', (req, res) => artistaController.exibirTodos(req, res))
    .get('/', (req, res) => artistaController.exibirTodos(req, res))
    .get('/:id', (req, res) => artistaController.exibirTodos(req, res))
    .put('/:id', (req, res) => artistaController.exibirTodos(req, res))
    .delete('/:id', (req, res) => artistaController.exibirTodos(req, res));
//# sourceMappingURL=Artista.router.js.map