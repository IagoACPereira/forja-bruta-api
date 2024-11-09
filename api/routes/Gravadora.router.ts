import { Router } from "express";
import { GravadoraController } from "../controllers/Gravadora.controller";

const gravadoraController = new GravadoraController();

export default Router()
  .post('/', (req, res) => gravadoraController.exibirTodos(req, res))
  .get('/', (req, res) => gravadoraController.exibirTodos(req, res))
  .get('/:id', (req, res) => gravadoraController.exibirTodos(req, res))
  .put('/:id', (req, res) => gravadoraController.exibirTodos(req, res))
  .delete('/:id', (req, res) => gravadoraController.exibirTodos(req, res));
