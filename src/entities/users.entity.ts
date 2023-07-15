import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Roles from './roles.entity';

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'char' })
  @OneToOne(() => Roles)
  role: string;

  @Column({ type: 'varbit', nullable: true })
  image: string;
}
