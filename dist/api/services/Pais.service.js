"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisService = void 0;
const Pais_model_1 = require("../models/Pais.model");
class PaisService {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    async adicionar() {
        const novoPais = await Pais_model_1.PaisModel.create({
            nome: this.nome,
        });
        return novoPais;
    }
    async pegaTodos() {
        const paises = await Pais_model_1.PaisModel.findAll();
        return paises;
    }
    async pegaUmPorId() {
        const pais = await Pais_model_1.PaisModel.findOne({
            where: {
                id: this.id,
            },
        });
        if (!pais) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return pais;
    }
    async atualizar() {
        await Pais_model_1.PaisModel.update({
            nome: this.nome,
        }, {
            where: {
                id: this.id,
            }
        });
    }
    async deletar() {
        await Pais_model_1.PaisModel.destroy({
            where: {
                id: this.id,
            }
        });
    }
}
exports.PaisService = PaisService;
//# sourceMappingURL=Pais.service.js.map