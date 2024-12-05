"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissaoController = void 0;
const Permissao_model_1 = require("../models/Permissao.model");
class PermissaoController {
    async adicionar(req, res) {
        const { descricao, titulo, } = req.body;
        try {
            const novaPermissao = await new Permissao_model_1.PermissaoModel(undefined, titulo, descricao).adicionar();
            res.status(201).json({
                mensagem: 'Permissão adicionada com sucesso',
                dados: novaPermissao,
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
            const permissoes = await new Permissao_model_1.PermissaoModel().pegaTodos();
            res.status(200).json({
                permissoes,
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
            const permissao = await new Permissao_model_1.PermissaoModel(id).pegaUmPorId();
            res.status(200).json({
                permissao,
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
        const { descricao, titulo, } = req.body;
        try {
            await new Permissao_model_1.PermissaoModel(id, titulo, descricao).atualizar();
            res.status(200).json({
                mensagem: 'Permissão atualizada com sucesso',
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
            await new Permissao_model_1.PermissaoModel(id).deletar();
            res.status(200).json({
                mensagem: 'Permissão deletada com sucesso',
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
exports.PermissaoController = PermissaoController;
//# sourceMappingURL=Permissao.controller.js.map