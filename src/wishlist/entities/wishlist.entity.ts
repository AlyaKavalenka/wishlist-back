import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  wishlist_id: string;

  @Column({ length: 30, unique: true })
  title: string;
}
