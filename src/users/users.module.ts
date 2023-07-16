import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Users from './entities/users.entity';
import Roles from 'src/roles/entities/roles.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([Users, Roles])],
  exports: [TypeOrmModule],
})
export class UsersModule {}
