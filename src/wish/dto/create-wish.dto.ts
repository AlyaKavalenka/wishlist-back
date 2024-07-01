import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsUrl, Length } from 'class-validator';

export class CreateWishDto {
  @ApiProperty()
  @IsString()
  @Length(0, 60)
  name: string;

  @ApiProperty()
  @IsString()
  @Length(0, 200)
  description: string;

  @ApiProperty()
  @IsArray()
  @IsUrl({}, { each: true })
  links: string[];

  @ApiProperty()
  @IsArray()
  @IsUrl({}, { each: true })
  photos: string[];

  @ApiProperty()
  @IsArray()
  wishlists_id: string[];
}
