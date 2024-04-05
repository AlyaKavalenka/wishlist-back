import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('wishlist')
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  @ApiOperation({ summary: 'Create new wishlist' })
  @ApiResponse({
    status: 201,
    description: 'New wishlist created',
  })
  @ApiResponse({
    status: 400,
    description: 'If request body does not contain required fields',
  })
  @HttpCode(201)
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.create(createWishlistDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all wishlists' })
  @ApiResponse({ status: 200, description: 'All wishlists records.' })
  findAll() {
    return this.wishlistService.findAll();
  }

  // TODO:
  @Get(':id')
  @ApiOperation({ summary: 'Get single wishlists by id' })
  @ApiResponse({
    status: 200,
    description: 'If record with id === wishlistId if it exists',
  })
  @ApiResponse({
    status: 400,
    description: 'If wishlistId is invalid (not uuid)',
  })
  @ApiResponse({
    status: 404,
    description: 'If record with id === wishlistId doesn`t exist',
  })
  findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(+id);
  }

  // TODO:
  @Patch(':id')
  @ApiOperation({ summary: 'Update wishlist info' })
  @ApiResponse({
    status: 200,
    description: 'Updated record if request is valid',
  })
  @ApiResponse({
    status: 400,
    description: 'If wishlistId is invalid (not uuid)',
  })
  @ApiResponse({
    status: 404,
    description: 'If record with id === wishlistId doesn`t exist',
  })
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(+id, updateWishlistDto);
  }

  // TODO:
  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete wishlist' })
  @ApiResponse({
    status: 204,
    description: 'If the record is found and deleted',
  })
  @ApiResponse({
    status: 400,
    description: 'If wishlistId is invalid (not uuid)',
  })
  @ApiResponse({
    status: 404,
    description: 'If record with id === wishlistId doesn`t exist',
  })
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(+id);
  }
}
