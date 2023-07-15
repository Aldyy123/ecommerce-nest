import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: ['admin', 'user', 'employe'] })
  code: string;
}
