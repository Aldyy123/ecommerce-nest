import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Roles, { RoleCode } from '../../roles/entities/roles.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export default class Users {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', default: RoleCode.USER })
  @OneToOne(() => Roles)
  role: string;

  @Column({ type: 'varbit', nullable: true })
  image: string;
}
