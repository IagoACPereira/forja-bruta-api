import { TArtista } from './Artista.type';
import { TDisco } from './Disco.type';
import { TFaixa } from './Faixa.type';
import { TGenero } from './Genero.type';
import { TGravadora } from './Gravadora.type';
import { TPais } from './Pais.type';
import { TPermissao } from './Permissao.type';
import { TRegiao } from './Regiao.type';
import { TTipo } from './Tipo.type';
import { TUsuario } from './Usuario.type';

export namespace TRequestBody {
  export type Pais = TPais;

  export type Regiao = TRegiao;

  export type Genero = TGenero;

  export type Artista = TArtista;

  export type Gravadora = TGravadora;

  export type Tipo = TTipo;

  export type Disco = TDisco;

  export type Faixa = TFaixa;

  export type Permissao = TPermissao;

  export type Usuario = TUsuario;
};

export namespace TRequestParams {
  export type Pais = {
    id: number | string;
  };

  export type Regiao = {
    id: number | string;
  };

  export type Genero = {
    id: number | string;
  };

  export type Artista = {
    id: number | string;
  };

  export type Gravadora = {
    id: number | string;
  };

  export type Tipo = {
    id: number | string;
  };

  export type Disco = {
    id: number | string;
  };

  export type Faixa = {
    id: number | string;
  };

  export type Permissao = {
    id: number | string;
  };

  export type Usuario = {
    id: number | string;
  };
};

export namespace TRequestQuery {

}