import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { WishService } from './wish.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';

// TODO: remove public
@Public()
@ApiTags('wish')
@Controller('wish')
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post()
  @ApiOperation({ summary: 'Create new wish' })
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    description: 'Create wish',
  })
  create(@Body() createWishDto: CreateWishDto) {
    return this.wishService.create(createWishDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Find all wishes',
  })
  findAll() {
    return this.wishService.findAll();
  }

  @Get('wishlist/:wishlist_id')
  @ApiResponse({
    status: 200,
    description: 'Find wishes by wishlist_id',
  })
  findAllByWishlist(
    @Param('wishlist_id', new ParseUUIDPipe()) wishlist_id: string,
  ) {
    return this.wishService.findAllByWishlist(wishlist_id);
  }

  @Get(':wish_id')
  findOne(@Param('wish_id', new ParseUUIDPipe()) wish_id: string) {
    return this.wishService.findOne(wish_id);
  }

  // TODO:
  @Patch(':wishlist_id')
  update(
    @Param('wishlist_id', new ParseUUIDPipe()) wishlist_id: string,
    @Body() updateWishDto: UpdateWishDto,
  ) {
    return this.wishService.update(wishlist_id, updateWishDto);
  }

  // TODO:
  @Delete(':wish_id')
  remove(@Param('wish_id', new ParseUUIDPipe()) wish_id: string) {
    return this.wishService.remove(wish_id);
  }
}
