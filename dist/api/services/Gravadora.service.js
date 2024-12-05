"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravadoraService = void 0;
const Gravadora_model_1 = require("../models/Gravadora.model");
class GravadoraService {
    constructor(id, nome, url_imagem, id_regiao) {
        this.id = id;
        this.nome = nome;
        this.url_imagem = url_imagem;
        this.id_regiao = id_regiao;
    }
    async adicionar() {
        const novaGravadora = await Gravadora_model_1.GravadoraModel.create({
            nome: this.nome,
            url_imagem: this.url_imagem,
            id_regiao: this.id_regiao,
        });
        return novaGravadora;
    }
    async pegaTodos() {
        const gravadoras = await Gravadora_model_1.GravadoraModel.findAll();
        return gravadoras;
    }
    async pegaUmPorId() {
        const gravadora = await Gravadora_model_1.GravadoraModel.findOne({
            where: {
                id: this.id,
            },
        });
        if (!gravadora) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return gravadora;
    }
    async atualizar() {
        await Gravadora_model_1.GravadoraModel.update({
            nome: this.nome,
            url_imagem: this.url_imagem,
            id_regiao: this.id_regiao,
        }, {
            where: {
                id: this.id,
            },
        });
    }
    async deletar() {
        await Gravadora_model_1.GravadoraModel.destroy({
            where: {
                id: this.id,
            },
        });
    }
}
exports.GravadoraService = GravadoraService;
//# sourceMappingURL=Gravadora.service.js.map