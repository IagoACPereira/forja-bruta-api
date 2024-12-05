import { TArtista } from "./Artista.type";
import { TDisco } from "./Disco.type";
import { TFaixa } from "./Faixa.type";
import { TGenero } from "./Genero.type";
import { TGravadora } from "./Gravadora.type";
import { TPais } from "./Pais.type";
import { TPermissao } from "./Permissao.type";
import { TRegiao } from "./Regiao.type";
import { TTipo } from "./Tipo.type";
import { TUsuario } from "./Usuario.type";
export declare namespace TRequestBody {
    type Pais = TPais;
    type Regiao = TRegiao;
    type Genero = TGenero;
    type Artista = TArtista;
    type Gravadora = TGravadora;
    type Tipo = TTipo;
    type Disco = TDisco;
    type Faixa = TFaixa;
    type Permissao = TPermissao;
    type Usuario = TUsuario;
}
export declare namespace TRequestParams {
    type Pais = {
        id: number | string;
    };
    type Regiao = {
        id: number | string;
    };
    type Genero = {
        id: number | string;
    };
    type Artista = {
        id: number | string;
    };
    type Gravadora = {
        id: number | string;
    };
    type Tipo = {
        id: number | string;
    };
    type Disco = {
        id: number | string;
    };
    type Faixa = {
        id: number | string;
    };
    type Permissao = {
        id: number | string;
    };
    type Usuario = {
        id: number | string;
    };
}
export declare namespace TRequestQuery {
}
