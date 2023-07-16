import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { InsertUserDto } from './dto/insert-user.dto';
import { QueryFailedError } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async registerUser(user: InsertUserDto) {
    try {
      return await this.userService.create(user);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async loginUser(user: LoginUserDto) {
    try {
      return await this.userService.findUserByEmail(user.email);
    } catch (error) {
      return new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
