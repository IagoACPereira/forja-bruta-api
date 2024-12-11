import { Router } from "express";
import { TipoController } from "../controllers/Tipo.controller";

const tipoController = new TipoController();

export default Router()
  .post('/', (req, res) => tipoController.adicionar(req, res))
  .get('/', (req, res) => tipoController.exibirTodos(req, res))
  .get('/:id', (req, res) => tipoController.exibirUm(req, res))
  .put('/:id', (req, res) => tipoController.atualizar(req, res))
  .delete('/:id', (req, res) => tipoController.deletar(req, res));
