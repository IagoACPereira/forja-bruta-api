"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoModel = void 0;
const conexaoDb_1 = require("../config/conexaoDb");
class TipoModel {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
    }
    async adicionar() {
        const novoTipo = await conexaoDb_1.knex.insert({
            titulo: this.titulo,
        }, '*')
            .into('tipo');
        return novoTipo[0];
    }
    async pegaTodos() {
        const tipos = await conexaoDb_1.knex.select('*')
            .from('tipo')
            .orderBy('id', 'asc');
        return tipos;
    }
    async pegaUmPorId() {
        const tipo = await conexaoDb_1.knex.select('*')
            .from('tipo')
            .first();
        if (!tipo) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return tipo;
    }
    async atualizar() {
        await conexaoDb_1.knex.update({
            titulo: this.titulo,
        })
            .from('tipo')
            .where({
            id: this.id,
        });
    }
    async deletar() {
        await conexaoDb_1.knex.delete()
            .from('tipo')
            .where({
            id: this.id,
        });
    }
}
exports.TipoModel = TipoModel;
//# sourceMappingURL=Tipo.model.js.map