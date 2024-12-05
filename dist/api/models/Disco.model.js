"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoModel = void 0;
const conexaoDb_1 = require("../config/conexaoDb");
class DiscoModel {
    constructor(id, titulo, data_lancamento, url_imagem, id_artista, id_gravadora, id_tipo) {
        this.id = id;
        this.titulo = titulo;
        this.data_lancamento = data_lancamento;
        this.url_imagem = url_imagem;
        this.id_artista = id_artista;
        this.id_gravadora = id_gravadora;
        this.id_tipo = id_tipo;
    }
    async adicionar() {
        const novoDisco = await conexaoDb_1.knex.insert({
            titulo: this.titulo,
            data_lancamento: this.data_lancamento,
            url_imagem: this.url_imagem,
            id_artista: this.id_artista,
            id_gravadora: this.id_gravadora,
            id_tipo: this.id_tipo,
        }, '*')
            .into('disco');
        return novoDisco[0];
    }
    async pegaTodos() {
        const discos = await conexaoDb_1.knex.select('*')
            .from('discos')
            .orderBy('id', 'asc');
        return discos;
    }
    async pegaUmPorId() {
        const disco = await conexaoDb_1.knex.select('*')
            .from('disco')
            .where({ id: this.id })
            .first();
        if (!disco) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return disco;
    }
    async atualizar() {
        await conexaoDb_1.knex.update({
            titulo: this.titulo,
            data_lancamento: this.data_lancamento,
            url_imagem: this.url_imagem,
            id_artista: this.id_artista,
            id_gravadora: this.id_gravadora,
            id_tipo: this.id_tipo,
        })
            .from('disco')
            .where({
            id: this.id,
        });
    }
    async deletar() {
        await conexaoDb_1.knex.delete()
            .from('disco')
            .where({
            id: this.id,
        });
    }
}
exports.DiscoModel = DiscoModel;
//# sourceMappingURL=Disco.model.js.map