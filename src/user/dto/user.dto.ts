import { User } from '../entities/user.entity';

export class UserDto {
  id: string;
  username: string;
  password: string;

  static convert(user: User) {
    const dto = new UserDto();

    dto.id = user.id;
    dto.username = user.username;

    return dto;
  }
}
