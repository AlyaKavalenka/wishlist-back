import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true, length: 20 })
  username: string;
}
