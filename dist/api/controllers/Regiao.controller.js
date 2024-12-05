"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegiaoController = void 0;
const Regiao_service_1 = require("../services/Regiao.service");
class RegiaoController {
    async adicionar(req, res) {
        const { estado, uf, id_pais, } = req.body;
        try {
            const novaRegiao = await new Regiao_service_1.RegiaoService(0, estado, uf, Number(id_pais)).adicionar();
            res.status(201).json({
                mensagem: 'Região adicionada com sucesso',
                dados: novaRegiao,
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
            const regioes = await new Regiao_service_1.RegiaoService(0, '', '', 0).pegaTodos();
            res.status(200).json({
                regioes,
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
            const regiao = await new Regiao_service_1.RegiaoService(Number(id), '', '', 0).pegaUmPorId();
            res.status(200).json({
                regiao,
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
        try {
            res.status(200).json({
                mensagem: 'Em desenvolvimento',
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
        try {
            res.status(200).json({
                mensagem: 'Em desenvolvimento',
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
exports.RegiaoController = RegiaoController;
//# sourceMappingURL=Regiao.controller.js.map