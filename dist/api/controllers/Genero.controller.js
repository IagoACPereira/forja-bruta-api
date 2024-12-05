"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroController = void 0;
const Genero_service_1 = require("../services/Genero.service");
class GeneroController {
    async adicionar(req, res) {
        const { titulo } = req.body;
        try {
            const novoGenero = await new Genero_service_1.GeneroService(0, titulo).adicionar();
            res.status(201).json({
                mensagem: 'Gênero adicionado com sucesso',
                dados: novoGenero,
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
            const generos = await new Genero_service_1.GeneroService(0, '').pegaTodos();
            res.status(200).json({
                generos,
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
            const genero = await new Genero_service_1.GeneroService(Number(id), '').pegaUmPorId();
            res.status(200).json({
                genero,
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
            await new Genero_service_1.GeneroService(Number(id), titulo).atualizar();
            res.status(200).json({
                mensagem: 'Gênero atualizado com sucesso',
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
            await new Genero_service_1.GeneroService(Number(id), '').deletar();
            res.status(200).json({
                mensagem: 'Gênero deletado com sucesso',
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
exports.GeneroController = GeneroController;
//# sourceMappingURL=Genero.controller.js.map