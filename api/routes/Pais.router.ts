import { Router } from "express";
import { PaisController } from "../controllers/Pais.controller";
import { PaisMiddlewares } from "../middlewares/Pais.middleware";

const paisController: PaisController = new PaisController();
const paisMiddlewares: PaisMiddlewares = new PaisMiddlewares();

export default Router()
  .post(
    '/',
    paisMiddlewares.sanitizaBody,
    paisMiddlewares.validaBody,
    (req, res) => paisController.adicionar(req, res)
  )
  .get('/', (req, res) => paisController.exibirTodos(req, res))
  .get('/:id', (req, res) => paisController.exibirUm(req, res))
  .put('/:id', (req, res) => paisController.atualizar(req, res))
  .delete('/:id', (req, res) => paisController.deletar(req, res))