"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoController = void 0;
const Disco_model_1 = require("../models/Disco.model");
class DiscoController {
    async adicionar(req, res) {
        const { data_lancamento, id_artista, id_gravadora, id_tipo, titulo, url_imagem, } = req.body;
        try {
            const novoDisco = await new Disco_model_1.DiscoModel(undefined, titulo, data_lancamento, url_imagem, id_artista, id_gravadora, id_tipo).adicionar();
            res.status(201).json({
                mensagem: 'Disco adicionado com sucesso',
                dados: novoDisco,
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
            const discos = await new Disco_model_1.DiscoModel().pegaTodos();
            res.status(200).json({
                discos,
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
            const disco = await new Disco_model_1.DiscoModel(id).pegaUmPorId();
            res.status(200).json({
                disco,
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
        const { data_lancamento, id_artista, id_gravadora, id_tipo, titulo, url_imagem, } = req.body;
        try {
            await new Disco_model_1.DiscoModel(id, titulo, data_lancamento, url_imagem, id_artista, id_gravadora, id_tipo).atualizar();
            res.status(200).json({
                mensagem: 'Disco atualizado com sucesso',
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
            await new Disco_model_1.DiscoModel(id).deletar();
            res.status(200).json({
                mensagem: 'Disco deletado com sucesso',
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
exports.DiscoController = DiscoController;
//# sourceMappingURL=Disco.controller.js.map