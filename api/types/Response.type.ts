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

  export type Artista = {
    mensagem: string;
    dados: TArtista;
    statusCode: number;
  };

  export type Gravadora = {
    mensagem: string;
    dados: TGravadora;
    statusCode: number;
  };

  export type Tipo = {
    mensagem: string;
    dados: TTipo;
    statusCode: number;
  };

  export type Disco = {
    mensagem: string;
    dados: TDisco;
    statusCode: number;
  };

  export type Faixa = {
    mensagem: string;
    dados: TFaixa;
    statusCode: number;
  };

  export type Permissao = {
    mensagem: string;
    dados: TPermissao;
    statusCode: number;
  };

  export type Usuario = {
    mensagem: string;
    dados: TUsuario;
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

  export type Artista = {
    artistas: Array<TArtista>;
    statusCode: number;
  };

  export type Gravadora = {
    gravadoras: Array<TGravadora>;
    statusCode: number;
  };

  export type Tipo = {
    tipos: Array<TTipo>;
    statusCode: number;
  };

  export type Disco = {
    discos: Array<TDisco>;
    statusCode: number;
  };

  export type Faixa = {
    faixas: Array<TFaixa>;
    statusCode: number;
  };

  export type Permissao = {
    permissoes: Array<TPermissao>;
    statusCode: number;
  };

  export type Usuario = {
    usuarios: Array<TUsuario>;
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

  export type Artista = {
    artista: TArtista;
    statusCode: number;
  };

  export type Gravadora = {
    gravadora: TGravadora;
    statusCode: number;
  };

  export type Tipo = {
    tipo: TTipo;
    statusCode: number;
  };

  export type Disco = {
    disco: TDisco;
    statusCode: number;
  };

  export type Faixa = {
    faixa: TFaixa;
    statusCode: number;
  };

  export type Permissao = {
    permissao: TPermissao;
    statusCode: number;
  };

  export type Usuario = {
    usuario: TUsuario;
    statusCode: number;
  };
};

export type TResponseDefault = {
  mensagem: string;
  statusCode: number;
}

export type TResponsePut = TResponseDefault;

export type TResponseDelete = TResponseDefault;

export type TResponseErro = TResponseDefault;