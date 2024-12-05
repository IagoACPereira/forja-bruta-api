"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissaoModel = void 0;
const conexaoDb_1 = require("../config/conexaoDb");
class PermissaoModel {
    constructor(id, titulo, descricao) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
    }
    async adicionar() {
        const novaPermissao = await conexaoDb_1.knex.insert({
            titulo: this.titulo,
            descricao: this.descricao,
        }, '*')
            .into('permissao');
        return novaPermissao[0];
    }
    async pegaTodos() {
        const permissoes = await conexaoDb_1.knex.select('*')
            .from('permissao')
            .orderBy('id', 'asc');
        return permissoes;
    }
    async pegaUmPorId() {
        const permissao = await conexaoDb_1.knex.select('*')
            .from('permissao')
            .where({ id: this.id })
            .first();
        if (!permissao) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return permissao;
    }
    async atualizar() {
        await conexaoDb_1.knex.update({
            titulo: this.titulo,
            descricao: this.descricao,
        })
            .from('permissao')
            .where({
            id: this.id,
        });
    }
    async deletar() {
        await conexaoDb_1.knex.delete()
            .from('permissao')
            .where({
            id: this.id,
        });
    }
}
exports.PermissaoModel = PermissaoModel;
//# sourceMappingURL=Permissao.model.js.map