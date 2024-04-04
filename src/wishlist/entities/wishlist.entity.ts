import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 30 })
  title: string;
}
