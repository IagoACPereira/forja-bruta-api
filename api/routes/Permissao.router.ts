import { Router } from "express";
import { PermissaoController } from "../controllers/Permissao.controller";
import { PermissaoMiddlewares } from "../middlewares/Permissao.middleware";

const permissaoController: PermissaoController = new PermissaoController();
const permissaoMiddlewares: PermissaoMiddlewares = new PermissaoMiddlewares();

export default Router()
  .post(
    '/',
    permissaoMiddlewares.sanitizaBody, 
    permissaoMiddlewares.validaBody, 
    (req, res) => permissaoController.adicionar(req, res)
  )
  .get('/', (req, res) => permissaoController.exibirTodos(req, res))
  .get('/:id', (req, res) => permissaoController.exibirUm(req, res))
  .put('/:id', (req, res) => permissaoController.atualizar(req, res))
  .delete('/:id', (req, res) => permissaoController.deletar(req, res));
