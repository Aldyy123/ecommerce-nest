import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RoleCode {
  ADMIN = 'ADMIN',
  USER = 'USER',
  EMPLOYEE = 'EMPLOYEE',
}
@Entity()
export default class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: RoleCode })
  code: RoleCode;
}
