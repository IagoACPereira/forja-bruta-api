export namespace TRequestBody {
  export type Pais = {
    nome: string;
  };

  export type Regiao = {
    estado: string;
    uf: string;
    id_pais: number | string;
  }
};

export namespace TRequestParams {
  export type Pais = {
    id: number | string;
  };

  export type Regiao = {
    id: number | string;
  };
};

export namespace TRequestQuery {
  
}