import { Router } from "express";
import { DiscoController } from "../controllers/Disco.controller";

const discoController = new DiscoController();

export default Router()
  .post('/', (req, res) => discoController.adicionar(req, res))
  .get('/', (req, res) => discoController.exibirTodos(req, res))
  .get('/:id', (req, res) => discoController.exibirUm(req, res))
  .put('/:id', (req, res) => discoController.atualizar(req, res))
  .delete('/:id', (req, res) => discoController.deletar(req, res));
