"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegiaoService = void 0;
const Regiao_model_1 = require("../models/Regiao.model");
class RegiaoService {
    constructor(id, estado, uf, id_pais) {
        this.id = id;
        this.estado = estado;
        this.uf = uf;
        this.id_pais = id_pais;
    }
    async adicionar() {
        const novaRegiao = await Regiao_model_1.RegiaoModel.create({
            estado: this.estado,
            uf: this.uf,
            id_pais: this.id_pais
        });
        return novaRegiao;
    }
    async pegaTodos() {
        const regioes = await Regiao_model_1.RegiaoModel.findAll();
        return regioes;
    }
    async pegaUmPorId() {
        const regiao = await Regiao_model_1.RegiaoModel.findOne({
            where: {
                id: this.id,
            },
        });
        if (!regiao) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return regiao;
    }
    async atualizar() {
        await Regiao_model_1.RegiaoModel.update({
            estado: this.estado,
            uf: this.uf,
            id_pais: this.id_pais,
        }, {
            where: {
                id: this.id,
            },
        });
    }
    async deletar() {
        await Regiao_model_1.RegiaoModel.destroy({
            where: {
                id: this.id,
            },
        });
    }
}
exports.RegiaoService = RegiaoService;
//# sourceMappingURL=Regiao.service.js.map