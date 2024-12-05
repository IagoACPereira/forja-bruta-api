"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoController = void 0;
const Tipo_model_1 = require("../models/Tipo.model");
class TipoController {
    async adicionar(req, res) {
        const { titulo, } = req.body;
        try {
            const novoTipo = await new Tipo_model_1.TipoModel(undefined, titulo).adicionar();
            res.status(201).json({
                mensagem: 'Tipo adicionado com sucesso',
                dados: novoTipo,
                statusCode: 201,
            });
        }
        catch (error) {
            res.status(400).json({
                mensagem: `${error}`,
                statusCode: 400,
            });
        }
    }
    async exibirTodos(req, res) {
        try {
            const tipos = await new Tipo_model_1.TipoModel().pegaTodos();
            res.status(200).json({
                tipos,
                statusCode: 200,
            });
        }
        catch (error) {
            res.status(400).json({
                mensagem: `${error}`,
                statusCode: 400,
            });
        }
    }
    async exibirUm(req, res) {
        const { id } = req.params;
        try {
            const tipo = await new Tipo_model_1.TipoModel(id).pegaUmPorId();
            res.status(200).json({
                tipo,
                statusCode: 200,
            });
        }
        catch (error) {
            res.status(400).json({
                mensagem: `${error}`,
                statusCode: 400,
            });
        }
    }
    async atualizar(req, res) {
        const { id } = req.params;
        const { titulo } = req.body;
        try {
            await new Tipo_model_1.TipoModel(id, titulo).atualizar();
            res.status(200).json({
                mensagem: 'Tipo atualizado com sucesso',
                statusCode: 200,
            });
        }
        catch (error) {
            res.status(400).json({
                mensagem: `${error}`,
                statusCode: 400,
            });
        }
    }
    async deletar(req, res) {
        const { id } = req.params;
        try {
            await new Tipo_model_1.TipoModel(id).deletar();
            res.status(200).json({
                mensagem: 'Tipo deletado com sucesso',
                statusCode: 200,
            });
        }
        catch (error) {
            res.status(400).json({
                mensagem: `${error}`,
                statusCode: 400,
            });
        }
    }
}
exports.TipoController = TipoController;
//# sourceMappingURL=Tipo.controller.js.map