import { User } from '../entities/user.entity';

export class UserDto {
  user_id: string;
  username: string;
  password: string;

  static convert(user: User) {
    const dto = new UserDto();

    dto.user_id = user.user_id;
    dto.username = user.username;

    return dto;
  }
}
