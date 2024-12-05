"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroService = void 0;
const Genero_model_1 = require("../models/Genero.model");
class GeneroService {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
    }
    async adicionar() {
        const novoGenero = await Genero_model_1.GeneroModel.create({
            titulo: this.titulo,
        });
        return novoGenero;
    }
    async pegaTodos() {
        const generos = await Genero_model_1.GeneroModel.findAll();
        return generos;
    }
    async pegaUmPorId() {
        const genero = await Genero_model_1.GeneroModel.findOne({
            where: {
                id: this.id,
            },
        });
        if (!genero) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return genero;
    }
    async atualizar() {
        await Genero_model_1.GeneroModel.update({
            titulo: this.titulo,
        }, {
            where: {
                id: this.id,
            },
        });
    }
    async deletar() {
        await Genero_model_1.GeneroModel.destroy({
            where: {
                id: this.id,
            },
        });
    }
}
exports.GeneroService = GeneroService;
//# sourceMappingURL=Genero.service.js.map