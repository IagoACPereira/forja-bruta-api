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
export declare namespace TResponsePost {
    type Pais = {
        mensagem: string;
        dados: TPais;
        statusCode: number;
    };
    type Regiao = {
        mensagem: string;
        dados: TRegiao;
        statusCode: number;
    };
    type Genero = {
        mensagem: string;
        dados: TGenero;
        statusCode: number;
    };
    type Artista = {
        mensagem: string;
        dados: TArtista;
        statusCode: number;
    };
    type Gravadora = {
        mensagem: string;
        dados: TGravadora;
        statusCode: number;
    };
    type Tipo = {
        mensagem: string;
        dados: TTipo;
        statusCode: number;
    };
    type Disco = {
        mensagem: string;
        dados: TDisco;
        statusCode: number;
    };
    type Faixa = {
        mensagem: string;
        dados: TFaixa;
        statusCode: number;
    };
    type Permissao = {
        mensagem: string;
        dados: TPermissao;
        statusCode: number;
    };
    type Usuario = {
        mensagem: string;
        dados: TUsuario;
        statusCode: number;
    };
}
export declare namespace TResponseGet {
    type Pais = {
        paises: Array<TPais>;
        statusCode: number;
    };
    type Regiao = {
        regioes: Array<TRegiao>;
        statusCode: number;
    };
    type Genero = {
        generos: Array<TGenero>;
        statusCode: number;
    };
    type Artista = {
        artistas: Array<TArtista>;
        statusCode: number;
    };
    type Gravadora = {
        gravadoras: Array<TGravadora>;
        statusCode: number;
    };
    type Tipo = {
        tipos: Array<TTipo>;
        statusCode: number;
    };
    type Disco = {
        discos: Array<TDisco>;
        statusCode: number;
    };
    type Faixa = {
        faixas: Array<TFaixa>;
        statusCode: number;
    };
    type Permissao = {
        permissoes: Array<TPermissao>;
        statusCode: number;
    };
    type Usuario = {
        usuarios: Array<TUsuario>;
        statusCode: number;
    };
}
export declare namespace TResponseGetId {
    type Pais = {
        pais: TPais;
        statusCode: number;
    };
    type Regiao = {
        regiao: TRegiao;
        statusCode: number;
    };
    type Genero = {
        genero: TGenero;
        statusCode: number;
    };
    type Artista = {
        artista: TArtista;
        statusCode: number;
    };
    type Gravadora = {
        gravadora: TGravadora;
        statusCode: number;
    };
    type Tipo = {
        tipo: TTipo;
        statusCode: number;
    };
    type Disco = {
        disco: TDisco;
        statusCode: number;
    };
    type Faixa = {
        faixa: TFaixa;
        statusCode: number;
    };
    type Permissao = {
        permissao: TPermissao;
        statusCode: number;
    };
    type Usuario = {
        usuario: TUsuario;
        statusCode: number;
    };
}
export type TResponseDefault = {
    mensagem: string;
    statusCode: number;
};
export type TResponsePut = TResponseDefault;
export type TResponseDelete = TResponseDefault;
export type TResponseErro = TResponseDefault;
