import { TGenero } from "./Genero.type";
import { TPais } from "./Pais.type";
import { TRegiao } from "./Regiao.type";

export namespace TRequestBody {
  export type Pais = TPais;

  export type Regiao = TRegiao;

  export type Genero = TGenero;
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
};

export namespace TRequestQuery {
  
}