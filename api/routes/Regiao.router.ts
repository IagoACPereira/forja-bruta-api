import { Router } from "express";
import { RegiaoController } from "../controllers/Regiao.controller";

const regiaoController = new RegiaoController();

export default Router()
  .post('/', (req, res) => regiaoController.adicionar(req, res))
  .get('/', (req, res) => regiaoController.exibirTodos(req, res))
  .get('/:id', (req, res) => regiaoController.exibirUm(req, res))
  .put('/:id', (req, res) => regiaoController.atualizar(req, res))
  .delete('/:id', (req, res) => regiaoController.deletar(req, res));