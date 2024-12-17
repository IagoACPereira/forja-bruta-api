import { Router } from 'express';
import { TipoController } from '../controllers/Tipo.controller';
import { TipoMiddlewares } from '../middlewares/Tipo.middleware';

const tipoController: TipoController = new TipoController();
const tipoMiddlewares: TipoMiddlewares = new TipoMiddlewares();

export default Router()
  .post(
    '/',
    tipoMiddlewares.sanitizaBody,
    tipoMiddlewares.validaBody,
    tipoMiddlewares.verificaDuplicidade,
    (req, res) => tipoController.adicionar(req, res),
  )
  .get('/', (req, res) => tipoController.exibirTodos(req, res))
  .get('/:id', (req, res) => tipoController.exibirUm(req, res))
  .put('/:id', (req, res) => tipoController.atualizar(req, res))
  .delete(
    '/:id',
    tipoMiddlewares.verificaRelacoesPreDelete,
    (req, res) => tipoController.deletar(req, res),
  );
