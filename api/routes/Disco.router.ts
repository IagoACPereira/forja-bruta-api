import { Router } from 'express';
import { DiscoController } from '../controllers/Disco.controller';
import { DiscoMiddlewares } from '../middlewares/Disco.middleware';

const discoController: DiscoController = new DiscoController();
const discoMiddleware: DiscoMiddlewares = new DiscoMiddlewares();

export default Router()
  .post(
    '/',
    discoMiddleware.sanitizaBody,
    discoMiddleware.validaBody,
    discoMiddleware.verificaDuplicidade,
    (req, res) => discoController.adicionar(req, res))
  .get('/', (req, res) => discoController.exibirTodos(req, res))
  .get('/:id', (req, res) => discoController.exibirUm(req, res))
  .put('/:id', (req, res) => discoController.atualizar(req, res))
  .delete('/:id', (req, res) => discoController.deletar(req, res));
