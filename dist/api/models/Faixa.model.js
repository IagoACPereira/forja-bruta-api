"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaixaModel = void 0;
const conexaoDb_1 = require("../config/conexaoDb");
class FaixaModel {
    constructor(id, titulo, duracao, num_faixa, letra, id_disco) {
        this.id = id;
        this.titulo = titulo;
        this.duracao = duracao;
        this.num_faixa = num_faixa;
        this.letra = letra;
        this.id_disco = id_disco;
    }
    async adicionar() {
        const novaFaixa = await conexaoDb_1.knex.insert({
            titulo: this.titulo,
            duracao: this.duracao,
            num_faixa: this.num_faixa,
            letra: this.letra,
            id_disco: this.id_disco,
        }, '*')
            .into('faixa');
        return novaFaixa[0];
    }
    async pegaTodos() {
        const faixas = await conexaoDb_1.knex.select('*')
            .from('faixa')
            .orderBy('id', 'asc');
        return faixas;
    }
    async pegaUmPorId() {
        const faixa = await conexaoDb_1.knex.select('*')
            .from('faixa')
            .where({ id: this.id })
            .first();
        if (!faixa) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return faixa;
    }
    async atualizar() {
        await conexaoDb_1.knex.update({
            titulo: this.titulo,
            duracao: this.duracao,
            num_faixa: this.num_faixa,
            letra: this.letra,
            id_disco: this.id_disco,
        })
            .from('faixa')
            .where({
            id: this.id,
        });
    }
    async deletar() {
        await conexaoDb_1.knex.delete()
            .from('faixa')
            .where({
            id: this.id,
        });
    }
}
exports.FaixaModel = FaixaModel;
//# sourceMappingURL=Faixa.model.js.map