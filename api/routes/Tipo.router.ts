import { Router } from "express";
import { TipoController } from "../controllers/Tipo.controller";

const tipoController = new TipoController();

export default Router()
  .post('/', (req, res) => tipoController.exibirTodos(req, res))
  .get('/', (req, res) => tipoController.exibirTodos(req, res))
  .get('/:id', (req, res) => tipoController.exibirTodos(req, res))
  .put('/:id', (req, res) => tipoController.exibirTodos(req, res))
  .delete('/:id', (req, res) => tipoController.exibirTodos(req, res));
