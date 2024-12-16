import { Router } from 'express';
import { GeneroController } from '../controllers/Genero.controller';
import { GeneroMiddlewares } from '../middlewares/Genero.middleware';

const generoController: GeneroController = new GeneroController();
const generoMiddlewares: GeneroMiddlewares = new GeneroMiddlewares();

export default Router()
  .post(
    '/',
    generoMiddlewares.sanitizaBody,
    generoMiddlewares.validaBody,
    generoMiddlewares.verificaDuplicidade,
    (req, res) => generoController.adicionar(req, res),
  )
  .get('/', (req, res) => generoController.exibirTodos(req, res))
  .get('/:id', (req, res) => generoController.exibirUm(req, res))
  .put('/:id', (req, res) => generoController.atualizar(req, res))
  .delete('/:id', (req, res) => generoController.deletar(req, res));