import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'genero' })
export class GeneroEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  titulo: string

  constructor(titulo: string) {
    this.titulo = titulo;
  }
}