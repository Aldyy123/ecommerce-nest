import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import Users from './users/entities/users.entity';
import Products from './products/entities/products.entity';
import Roles from './roles/entities/roles.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/entities/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      // logging: true,
    }),
    TypeOrmModule.forFeature([Users, Products, Roles]),
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
})
export class AppModule {
  constructor(protected dataSource: DataSource) {}
}
