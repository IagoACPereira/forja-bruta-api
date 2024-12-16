import { Router } from "express";
import { ArtistaController } from "../controllers/Artista.controller";
import { ArtistaMiddlewares } from "../middlewares/Artista.middleware";

const artistaController: ArtistaController = new ArtistaController();
const artistaMiddleware: ArtistaMiddlewares = new ArtistaMiddlewares();

export default Router()
  .post(
    '/', 
    artistaMiddleware.sanitizaBody, 
    artistaMiddleware.validaBody,
    artistaMiddleware.verificaDuplicidade,
    (req, res) => artistaController.adicionar(req, res))
  .get('/', (req, res) => artistaController.exibirTodos(req, res))
  .get('/:id', (req, res) => artistaController.exibirUm(req, res))
  .put('/:id', (req, res) => artistaController.atualizar(req, res))
  .delete('/:id', (req, res) => artistaController.deletar(req, res));
