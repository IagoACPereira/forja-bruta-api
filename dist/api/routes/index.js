"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const Pais_router_1 = __importDefault(require("./Pais.router"));
const Regiao_router_1 = __importDefault(require("./Regiao.router"));
const Genero_router_1 = __importDefault(require("./Genero.router"));
const Artista_router_1 = __importDefault(require("./Artista.router"));
const Disco_router_1 = __importDefault(require("./Disco.router"));
const Faixa_router_1 = __importDefault(require("./Faixa.router"));
const Gravadora_router_1 = __importDefault(require("./Gravadora.router"));
const Permissao_router_1 = __importDefault(require("./Permissao.router"));
const Tipo_router_1 = __importDefault(require("./Tipo.router"));
const Usuario_router_1 = __importDefault(require("./Usuario.router"));
const endpointRaiz = String(process.env.ENDPOINT_RAIZ);
function routes(app) {
    app
        .get(endpointRaiz, (req, res) => {
        res.status(200).json('Forja Bruta API');
    })
        .use(`${process.env.ENDPOINT_RAIZ}/artista`, Artista_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/pais`, Pais_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/regiao`, Regiao_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/genero`, Genero_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/disco`, Disco_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/faixa`, Faixa_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/gravadora`, Gravadora_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/permissao`, Permissao_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/tipo`, Tipo_router_1.default)
        .use(`${process.env.ENDPOINT_RAIZ}/usuario`, Usuario_router_1.default);
}
//# sourceMappingURL=index.js.map