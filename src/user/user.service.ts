import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRep: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User();
    newUser.username = username;
    newUser.password = hashedPassword;

    try {
      await this.userRep.save(newUser);
    } catch (error) {
      if (error.message.match('duplicate'))
        throw new BadRequestException('User with this username already exist');
    }

    return UserDto.convert(newUser);
  }

  async findAll() {
    const users = await this.userRep.find();

    return users.map((user) => UserDto.convert(user));
  }

  async findOne(id: string) {
    const user = await this.userRep.findOneBy({ id });

    if (!user) throw new NotFoundException();

    return UserDto.convert(user);
  }

  async findOneByUsername(username: string) {
    const user = await this.userRep.findOneBy({ username });

    if (!user) throw new NotFoundException();

    return user;
  }

  // TODO:
  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  // TODO:
  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
