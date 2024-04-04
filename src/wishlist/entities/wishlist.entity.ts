import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;
}
