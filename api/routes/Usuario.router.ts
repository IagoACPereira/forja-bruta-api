import { Router } from "express";
import { UsuarioController } from "../controllers/Usuario.controller";

const usuarioController = new UsuarioController();

export default Router()
  .post('/', (req, res) => usuarioController.exibirTodos(req, res))
  .get('/', (req, res) => usuarioController.exibirTodos(req, res))
  .get('/:id', (req, res) => usuarioController.exibirTodos(req, res))
  .put('/:id', (req, res) => usuarioController.exibirTodos(req, res))
  .delete('/:id', (req, res) => usuarioController.exibirTodos(req, res));
