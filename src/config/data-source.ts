import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: 'root',
  password: 'root',
  database: 'fava-eccomerce',
  synchronize: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  entities: ['dist/entities/*.entity{.ts,.js}'],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
