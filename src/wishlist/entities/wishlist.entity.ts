import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  wishlist_id: string;

  @Column({ length: 30, unique: true })
  title: string;

  @Column({ nullable: true })
  wishlist_img: string | null;

  @Column({ nullable: true })
  event_date: Date | null;

  @UpdateDateColumn()
  update_at: Date;
}
