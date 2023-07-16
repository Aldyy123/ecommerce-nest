import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { InsertUserDto } from './dto/insert-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerUser(@Body(ValidationPipe) user: InsertUserDto) {
    return this.authService.registerUser(user);
  }

  @Post('login')
  async loginUser(@Body(ValidationPipe) user: LoginUserDto) {
    return this.authService.loginUser(user);
  }
}
