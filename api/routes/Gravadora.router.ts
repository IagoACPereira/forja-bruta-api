import { Router } from "express";
import { GravadoraController } from "../controllers/Gravadora.controller";
import { GravadoraMiddlewares } from "../middlewares/Gravadora.middleware";

const gravadoraController: GravadoraController = new GravadoraController();
const gravadoraMiddlewares: GravadoraMiddlewares = new GravadoraMiddlewares();

export default Router()
  .post(
    '/',
    gravadoraMiddlewares.sanitizaBody, 
    gravadoraMiddlewares.validaBody, 
    (req, res) => gravadoraController.adicionar(req, res)
  )
  .get('/', (req, res) => gravadoraController.exibirTodos(req, res))
  .get('/:id', (req, res) => gravadoraController.exibirUm(req, res))
  .put('/:id', (req, res) => gravadoraController.atualizar(req, res))
  .delete('/:id', (req, res) => gravadoraController.deletar(req, res));
