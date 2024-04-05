import { Wishlist } from 'src/wishlist/entities/wishlist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Wish {
  @PrimaryGeneratedColumn('uuid')
  wish_id: string;

  @Column({ length: 60 })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'text', array: true })
  links: string[];

  @Column({ type: 'text', array: true })
  photos: string[];

  @ManyToOne(() => Wishlist, { eager: true })
  @JoinColumn()
  wishlist: Wishlist;
}
