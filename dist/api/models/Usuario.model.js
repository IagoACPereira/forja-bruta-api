"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const conexaoDb_1 = require("../config/conexaoDb");
class UsuarioModel {
    constructor(id, nome, email, telefone, senha, id_permissao) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.id_permissao = id_permissao;
    }
    async adicionar() {
        const novoUsuario = await conexaoDb_1.knex.insert({
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            senha: this.senha,
            id_permissao: this.id_permissao,
        }, '*')
            .into('permissao');
        return novoUsuario[0];
    }
    async pegaTodos() {
        const usuarios = await conexaoDb_1.knex.select('*')
            .from('usuario')
            .orderBy('id', 'asc');
        return usuarios;
    }
    async pegaUmPorId() {
        const usuario = await conexaoDb_1.knex.select('*')
            .from('usuario')
            .where({ id: this.id })
            .first();
        if (!usuario) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return usuario;
    }
    async atualizar() {
        await conexaoDb_1.knex.update({
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            senha: this.senha,
            id_permissao: this.id_permissao,
        })
            .from('usuario')
            .where({
            id: this.id,
        });
    }
    async deletar() {
        await conexaoDb_1.knex.delete()
            .from('usuario')
            .where({
            id: this.id,
        });
    }
}
exports.UsuarioModel = UsuarioModel;
//# sourceMappingURL=Usuario.model.js.map