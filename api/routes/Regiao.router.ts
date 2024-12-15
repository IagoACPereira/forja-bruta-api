import { Router } from "express";
import { RegiaoController } from "../controllers/Regiao.controller";
import { RegiaoMiddlewares } from "../middlewares/Regiao.middleware";

const regiaoController: RegiaoController = new RegiaoController();
const regiaoMiddlewares: RegiaoMiddlewares = new RegiaoMiddlewares();

export default Router()
  .post(
    '/',
    regiaoMiddlewares.validaBody,
    (req, res) => regiaoController.adicionar(req, res)
  )
  .get('/', (req, res) => regiaoController.exibirTodos(req, res))
  .get('/:id', (req, res) => regiaoController.exibirUm(req, res))
  .put('/:id', (req, res) => regiaoController.atualizar(req, res))
  .delete('/:id', (req, res) => regiaoController.deletar(req, res));