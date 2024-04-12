import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateWishlistDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  title: string;

  @ApiProperty()
  wishlist_img: string | null;

  @ApiProperty()
  event_date: Date | null;
}
