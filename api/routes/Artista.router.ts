import { Router } from "express";
import { ArtistaController } from "../controllers/Artista.controller";

const artistaController = new ArtistaController();

export default Router()
  .post('/', (req, res) => artistaController.exibirTodos(req, res))
  .get('/', (req, res) => artistaController.exibirTodos(req, res))
  .get('/:id', (req, res) => artistaController.exibirTodos(req, res))
  .put('/:id', (req, res) => artistaController.exibirTodos(req, res))
  .delete('/:id', (req, res) => artistaController.exibirTodos(req, res));
