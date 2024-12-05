"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaixaController = void 0;
const Faixa_model_1 = require("../models/Faixa.model");
class FaixaController {
    async adicionar(req, res) {
        const { duracao, id_disco, letra, num_faixa, titulo, } = req.body;
        try {
            const novaFaixa = await new Faixa_model_1.FaixaModel(undefined, titulo, duracao, num_faixa, letra, id_disco).adicionar();
            res.status(201).json({
                mensagem: 'Faixa adicionada com sucesso',
                dados: novaFaixa,
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
            const faixas = await new Faixa_model_1.FaixaModel().pegaTodos();
            res.status(200).json({
                faixas,
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
            const faixa = await new Faixa_model_1.FaixaModel(id).pegaUmPorId();
            res.status(200).json({
                faixa,
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
        const { duracao, id_disco, letra, num_faixa, titulo, } = req.body;
        try {
            await new Faixa_model_1.FaixaModel(id, titulo, duracao, num_faixa, letra, id_disco).atualizar();
            res.status(200).json({
                mensagem: 'Faixa atualizada com sucesso',
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
            await new Faixa_model_1.FaixaModel(id).deletar();
            res.status(200).json({
                mensagem: 'Faixa deletada com sucesso',
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
exports.FaixaController = FaixaController;
//# sourceMappingURL=Faixa.controller.js.map