import { Router } from "express";
import { GravadoraController } from "../controllers/Gravadora.controller";

const gravadoraController = new GravadoraController();

export default Router()
  .post('/', (req, res) => gravadoraController.adicionar(req, res))
  .get('/', (req, res) => gravadoraController.exibirTodos(req, res))
  .get('/:id', (req, res) => gravadoraController.exibirUm(req, res))
  .put('/:id', (req, res) => gravadoraController.atualizar(req, res))
  .delete('/:id', (req, res) => gravadoraController.deletar(req, res));
