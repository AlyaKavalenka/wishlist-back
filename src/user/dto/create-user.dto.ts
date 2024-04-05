import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @Length(3, 20)
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
