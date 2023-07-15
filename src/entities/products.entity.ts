import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'varchar' })
  images: Array<string>;

  @Column({ type: 'numeric' })
  stock: number;

  @Column({ type: 'boolean' })
  status: boolean;
}
