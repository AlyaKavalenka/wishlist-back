import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  // TODO:
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  // TODO:
  findAll() {
    return `This action returns all user`;
  }
  // TODO:
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  // TODO:
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  // TODO:
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
