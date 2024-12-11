import { Router } from "express";
import { UsuarioController } from "../controllers/Usuario.controller";

const usuarioController = new UsuarioController();

export default Router()
  .post('/', (req, res) => usuarioController.adicionar(req, res))
  .get('/', (req, res) => usuarioController.exibirTodos(req, res))
  .get('/:id', (req, res) => usuarioController.exibirUm(req, res))
  .put('/:id', (req, res) => usuarioController.atualizar(req, res))
  .delete('/:id', (req, res) => usuarioController.deletar(req, res));
