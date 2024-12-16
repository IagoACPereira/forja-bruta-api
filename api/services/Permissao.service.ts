import { IPermissaoService } from '../interfaces/Permissao.interface';
import { PermissaoModel } from '../models/Permissao.model';
import { UsuarioModel } from '../models/Usuario.model';
import { TPermissao } from '../types/Permissao.type';

export class PermissaoService implements IPermissaoService {
  constructor(
    public id: string | number,
    public titulo: string,
    public descricao: string,
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
  }
  async adicionar(): Promise<TPermissao> {
    return await PermissaoModel.create({
      descricao: this.descricao,
      titulo: this.titulo,
    } as TPermissao) as TPermissao;
  }

  async pegaTodos(): Promise<Array<TPermissao>> {
    return await PermissaoModel.findAll() as Array<TPermissao>;
  }

  async pegaUmPorId(): Promise<TPermissao> {
    const permissao = await PermissaoModel.findOne({
      where: {
        id: this.id,
      },
      include: [
        {
          model: UsuarioModel,
          attributes: ['id', 'nome', 'email'],
          as: 'usuarios',
        },
      ],
    });

    if (!permissao) {
      throw new Error('Não foi encontrado nenhum registro');
    }

    return permissao as TPermissao;
  }

  async atualizar(): Promise<void> {
    await PermissaoModel.update({
      descricao: this.descricao,
      titulo: this.titulo,
    } as TPermissao, {
      where: {
        id: this.id,
      },
    });
  }

  async deletar(): Promise<void> {
    await PermissaoModel.destroy({
      where: {
        id: this.id,
      },
    });
  }
}