import { Router } from "express";
import { UsuarioController } from "../controllers/Usuario.controller";
import { UsuarioMiddlewares } from "../middlewares/Usuario.middleware";

const usuarioController: UsuarioController = new UsuarioController();
const usuarioMiddlewares: UsuarioMiddlewares = new UsuarioMiddlewares();

export default Router()
  .post(
    '/',
    usuarioMiddlewares.sanitizaBody,
    usuarioMiddlewares.validaBody, 
    (req, res) => usuarioController.adicionar(req, res)
  )
  .get('/', (req, res) => usuarioController.exibirTodos(req, res))
  .get('/:id', (req, res) => usuarioController.exibirUm(req, res))
  .put('/:id', (req, res) => usuarioController.atualizar(req, res))
  .delete('/:id', (req, res) => usuarioController.deletar(req, res));
