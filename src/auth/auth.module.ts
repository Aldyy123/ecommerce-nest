import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import Users from 'src/users/entities/users.entity';

@Module({
  providers: [AuthService, UsersService],
  imports: [UsersModule, TypeOrmModule.forFeature([Users])],
  controllers: [AuthController],
  exports: [AuthService, TypeOrmModule],
})
export class AuthModule {}
