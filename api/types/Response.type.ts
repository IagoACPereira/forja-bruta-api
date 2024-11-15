import { TGenero } from "./Genero.type";
import { TPais } from "./Pais.type";
import { TRegiao } from "./Regiao.type";

export type TResponseErro = {
  mensagem: string;
  statusCode: number;
}

export namespace TResponsePost {
  export type Pais = {
    mensagem: string;
    dados: TPais;
    statusCode: number;
  };

  export type Regiao = {
    mensagem: string;
    dados: TRegiao;
    statusCode: number;
  };

  export type Genero = {
    mensagem: string;
    dados: TGenero;
    statusCode: number;
  };
};

export namespace TResponseGet {
  export type Pais = {
    paises: Array<TPais>;
    statusCode: number;
  };

  export type Regiao = {
    regioes: Array<TRegiao>;
    statusCode: number;
  };

  export type Genero = {
    generos: Array<TGenero>;
    statusCode: number;
  };
};

export namespace TResponseGetId {
  export type Pais = {
    pais: TPais;
    statusCode: number;
  };

  export type Regiao = {
    regiao: TRegiao;
    statusCode: number;
  };

  export type Genero = {
    genero: TGenero;
    statusCode: number;
  };
};

export type TResponsePut = {
  mensagem: string;
  statusCode: number;
}

export type TResponseDelete = TResponsePut;