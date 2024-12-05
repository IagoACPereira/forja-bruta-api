"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaController = void 0;
const Artista_service_1 = require("../services/Artista.service");
class ArtistaController {
    async adicionar(req, res) {
        const { nome, ativo, data_formacao, descricao, id_regiao, url_imagem, } = req.body;
        try {
            const novoArtista = await new Artista_service_1.ArtistaService(0, nome, data_formacao, ativo, descricao, url_imagem, Number(id_regiao)).adicionar();
            res.status(201).json({
                mensagem: 'Artista adicionado com sucesso',
                dados: novoArtista,
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
            const artistas = await new Artista_service_1.ArtistaService(0, '', new Date(), false, '', '', 0).pegaTodos();
            res.status(200).json({
                artistas,
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
            const artista = await new Artista_service_1.ArtistaService(Number(id), '', new Date(), false, '', '', 0).pegaUmPorId();
            res.status(200).json({
                artista,
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
        const { ativo, data_formacao, descricao, id_regiao, nome, url_imagem, } = req.body;
        try {
            await new Artista_service_1.ArtistaService(Number(id), nome, data_formacao, ativo, descricao, url_imagem, Number(id_regiao)).atualizar();
            res.status(200).json({
                mensagem: 'Artista atualizado com sucesso',
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
            await new Artista_service_1.ArtistaService(Number(id), '', new Date(), false, '', '', 0).deletar();
            res.status(200).json({
                mensagem: 'Artista deletado com sucesso',
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
exports.ArtistaController = ArtistaController;
//# sourceMappingURL=Artista.controller.js.map