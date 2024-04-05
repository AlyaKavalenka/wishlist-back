import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);

    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return UserDto.convert(user);
      }
    }

    return null;
  }

  private createTokens(user: User) {
    const { user_id, username } = user;
    const payload = { username: username, sub: user_id };
    return {
      user_id,
      username,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      return this.createTokens(user);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async login(user: User) {
    return this.createTokens(user);
  }
}
