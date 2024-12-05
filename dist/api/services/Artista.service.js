"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaService = void 0;
const Artista_model_1 = require("../models/Artista.model");
class ArtistaService {
    constructor(id, nome, data_formacao, ativo, descricao, url_imagem, id_regiao) {
        this.id = id;
        this.nome = nome;
        this.data_formacao = data_formacao;
        this.ativo = ativo;
        this.descricao = descricao;
        this.url_imagem = url_imagem;
        this.id_regiao = id_regiao;
    }
    async adicionar() {
        const novoArtista = await Artista_model_1.ArtistaModel.create({
            nome: this.nome,
            ativo: this.ativo,
            data_formacao: this.data_formacao,
            descricao: this.descricao,
            url_imagem: this.url_imagem,
            id_regiao: this.id_regiao,
        });
        return novoArtista;
    }
    async pegaTodos() {
        const artistas = await Artista_model_1.ArtistaModel.findAll();
        return artistas;
    }
    async pegaUmPorId() {
        const artista = await Artista_model_1.ArtistaModel.findOne({
            where: {
                id: this.id,
            },
        });
        if (!artista) {
            throw new Error('Não foi encontrado nenhum registro');
        }
        return artista;
    }
    async atualizar() {
        await Artista_model_1.ArtistaModel.update({
            nome: this.nome,
            ativo: this.ativo,
            data_formacao: this.data_formacao,
            descricao: this.descricao,
            url_imagem: this.url_imagem,
            id_regiao: this.id_regiao,
        }, {
            where: {
                id: this.id,
            },
        });
    }
    async deletar() {
        await Artista_model_1.ArtistaModel.destroy({
            where: {
                id: this.id,
            },
        });
    }
}
exports.ArtistaService = ArtistaService;
//# sourceMappingURL=Artista.service.js.map