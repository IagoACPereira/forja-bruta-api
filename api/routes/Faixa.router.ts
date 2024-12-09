import { Router } from "express";
import { FaixaController } from "../controllers/Faixa.controller";

const faixaController = new FaixaController();

export default Router()
  .post('/', (req, res) => faixaController.adicionar(req, res))
  .get('/', (req, res) => faixaController.exibirTodos(req, res))
  .get('/:id', (req, res) => faixaController.exibirUm(req, res))
  .put('/:id', (req, res) => faixaController.atualizar(req, res))
  .delete('/:id', (req, res) => faixaController.deletar(req, res));
