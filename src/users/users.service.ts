import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertUserDto } from 'src/auth/dto/insert-user.dto';
import Users from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: InsertUserDto) {
    const user = await this.usersRepository.create(createUserDto);
    const userCreated = await this.usersRepository.save(user);
    return userCreated;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return 'tes';
  }

  findUserByEmail(email: string) {
    const options = {
      email,
    };
    return this.usersRepository.findOneBy(options);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
