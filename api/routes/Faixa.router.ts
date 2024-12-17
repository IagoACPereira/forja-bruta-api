import { Router } from 'express';
import { FaixaController } from '../controllers/Faixa.controller';
import { FaixaMiddlewares } from '../middlewares/Faixa.middleware';

const faixaController: FaixaController = new FaixaController();
const faixaMiddlewares: FaixaMiddlewares = new FaixaMiddlewares();

export default Router()
  .post(
    '/',
    faixaMiddlewares.sanitizaBody,
    faixaMiddlewares.validaBody,
    faixaMiddlewares.verificaDuplicidade,
    (req, res) => faixaController.adicionar(req, res))
  .get('/', (req, res) => faixaController.exibirTodos(req, res))
  .get('/:id', (req, res) => faixaController.exibirUm(req, res))
  .put('/:id', (req, res) => faixaController.atualizar(req, res))
  .delete(
    '/:id', (req, res) => faixaController.deletar(req, res));
