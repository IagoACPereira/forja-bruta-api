import { Router } from "express";
import { PermissaoController } from "../controllers/Permissao.controller";

const permissaoController = new PermissaoController();

export default Router()
  .post('/', (req, res) => permissaoController.exibirTodos(req, res))
  .get('/', (req, res) => permissaoController.exibirTodos(req, res))
  .get('/:id', (req, res) => permissaoController.exibirTodos(req, res))
  .put('/:id', (req, res) => permissaoController.exibirTodos(req, res))
  .delete('/:id', (req, res) => permissaoController.exibirTodos(req, res));
