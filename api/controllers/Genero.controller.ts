import { Request, Response } from "express";
import { GeneroEntity } from "../entities/Genero.entity";
import { AppDataSource } from "../config/AppDataSource";

export class GeneroController {
  constructor(private repository = AppDataSource.getRepository(GeneroEntity)) {}

  async adicionar(
    req: Request<{}, {}, { titulo: string }>, 
    res: Response<{ mensagem: string, dados: GeneroEntity } | { mensagem: string }>
  ) {
    const { titulo } = req.body;
    try {
      const novoGenero = new GeneroEntity(titulo);
  
      await this.repository.save(novoGenero);
  
      res.status(201).json({
        mensagem: 'Genero adicionado com sucesso',
        dados: novoGenero,
      });
    } catch(error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async exibirTodos(
    req: Request, 
    res: Response<Array<GeneroEntity> | { mensagem: string }>
  ) {
    try {
      const todosGeneros = await this.repository.find();

      res.status(200).json(todosGeneros);
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async exibirUm(
    req: Request<{ id: string }>,
    res: Response<GeneroEntity | { mensagem: string }>
  ) {
    const { id } = req.params;
    try {
      const genero = await this.repository.findOne({
        where: { 
          id: Number(id),
        },
      });

      if (!genero) {
        throw new Error('Não existe registro com esse id');
      }

      res.status(200).json(genero);
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async atualizar(
    req: Request<{ id: string }, {}, { titulo: string }>, 
    res: Response<{ mensagem: string }>
  ) {
    const { id } = req.params;
    const { titulo } = req.body;
    try {
      const atualizaGenero = await this.repository.findOneBy({
        id: Number(id),
      });

      if (!atualizaGenero) {
        throw new Error('Não existe registro com esse id');
      }

      atualizaGenero.titulo = titulo;

      await this.repository.save(atualizaGenero);

      res.status(200).json({
        mensagem: 'Gênero atualizado com sucesso',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }

  async deletar(
    req: Request<{ id: string }>, 
    res: Response<{ mensagem: string }>
  ) {
    const { id } = req.params;
    try {
      const deletaGenero = await this.repository.findOneBy({
        id: Number(id),
      });

      if (!deletaGenero) {
        throw new Error('Não existe registro com esse id');
      }

      await this.repository.remove(deletaGenero);

      res.status(200).json({
        mensagem: 'Gênero deletado com sucesso',
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `${error}`,
      });
    }
  }
}