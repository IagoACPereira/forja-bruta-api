import { Router } from "express";
import { PermissaoController } from "../controllers/Permissao.controller";

const permissaoController = new PermissaoController();

export default Router()
  .post('/', (req, res) => permissaoController.adicionar(req, res))
  .get('/', (req, res) => permissaoController.exibirTodos(req, res))
  .get('/:id', (req, res) => permissaoController.exibirUm(req, res))
  .put('/:id', (req, res) => permissaoController.atualizar(req, res))
  .delete('/:id', (req, res) => permissaoController.deletar(req, res));
