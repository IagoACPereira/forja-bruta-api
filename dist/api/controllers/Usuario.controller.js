"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const Usuario_model_1 = require("../models/Usuario.model");
class UsuarioController {
    async adicionar(req, res) {
        const { email, id_permissao, nome, senha, telefone, } = req.body;
        try {
            const novoUsuario = await new Usuario_model_1.UsuarioModel(undefined, nome, email, telefone, senha, id_permissao).adicionar();
            res.status(201).json({
                mensagem: 'Usuário adicionado com sucesso',
                dados: novoUsuario,
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
            const usuarios = await new Usuario_model_1.UsuarioModel().pegaTodos();
            res.status(200).json({
                usuarios,
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
            const usuario = await new Usuario_model_1.UsuarioModel(id).pegaUmPorId();
            res.status(200).json({
                usuario,
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
        const { email, id_permissao, nome, senha, telefone, } = req.body;
        try {
            await new Usuario_model_1.UsuarioModel(id, nome, email, telefone, senha, id_permissao).atualizar();
            res.status(200).json({
                mensagem: 'Usuário atualizado com sucesso',
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
            await new Usuario_model_1.UsuarioModel(id).deletar();
            res.status(200).json({
                mensagem: 'Usuário deletado com sucesso',
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
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=Usuario.controller.js.map