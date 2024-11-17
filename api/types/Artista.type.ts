export type TArtista = {
  id?: number | string;
  nome: string;
  data_formacao: Date;
  ativo: boolean;
  descricao: Text;
  url_imagem: string;
  id_regiao: number | string;
}