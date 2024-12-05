"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravadoraController = void 0;
const Gravadora_service_1 = require("../services/Gravadora.service");
class GravadoraController {
    async adicionar(req, res) {
        const { id_regiao, nome, url_imagem } = req.body;
        try {
            const novaGravadora = await new Gravadora_service_1.GravadoraService(0, nome, url_imagem, Number(id_regiao)).adicionar();
            res.status(201).json({
                mensagem: 'Gravadora adicionada com sucesso',
                dados: novaGravadora,
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
            const gravadoras = await new Gravadora_service_1.GravadoraService(0, '', '', 0).pegaTodos();
            res.status(200).json({
                gravadoras,
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
            const gravadora = await new Gravadora_service_1.GravadoraService(Number(id), '', '', 0).pegaUmPorId();
            res.status(200).json({
                gravadora,
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
        const { id_regiao, nome, url_imagem, } = req.body;
        try {
            await new Gravadora_service_1.GravadoraService(Number(id), nome, url_imagem, Number(id_regiao)).atualizar();
            res.status(200).json({
                mensagem: 'Gravadora atualizado com sucesso',
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
            await new Gravadora_service_1.GravadoraService(Number(id), '', '', 0).deletar();
            res.status(200).json({
                mensagem: 'Gravadora deletado com sucesso',
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
exports.GravadoraController = GravadoraController;
//# sourceMappingURL=Gravadora.controller.js.map