"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisController = void 0;
const Pais_service_1 = require("../services/Pais.service");
class PaisController {
    async adicionar(req, res) {
        const { nome } = req.body;
        try {
            const novoPais = await new Pais_service_1.PaisService(0, nome).adicionar();
            res.status(201).json({
                mensagem: 'País adicionado com sucesso',
                dados: novoPais,
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
            const paises = await new Pais_service_1.PaisService(0, '').pegaTodos();
            res.status(200).json({
                paises: paises,
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
            const pais = await new Pais_service_1.PaisService(Number(id), '').pegaUmPorId();
            res.status(200).json({
                pais,
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
        const { nome } = req.body;
        try {
            await new Pais_service_1.PaisService(Number(id), nome).atualizar();
            res.status(200).json({
                mensagem: 'País atualizado com sucesso',
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
            await new Pais_service_1.PaisService(Number(id), '').deletar();
            res.status(200).json({
                mensagem: 'País deletado com sucesso',
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
exports.PaisController = PaisController;
//# sourceMappingURL=Pais.controller.js.map