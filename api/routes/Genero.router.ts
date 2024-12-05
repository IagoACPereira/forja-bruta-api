import { Router } from "express";
import { GeneroController } from "../controllers/Genero.controller";

const generoController = new GeneroController()

export default Router()
  .post('/', (req, res) => generoController.adicionar(req, res))
  .get('/', (req, res) => generoController.exibirTodos(req, res))
  .get('/:id', (req, res) => generoController.exibirUm(req, res))
  .put('/:id', (req, res) => generoController.atualizar(req, res))
  .delete('/:id', (req, res) => generoController.deletar(req, res))