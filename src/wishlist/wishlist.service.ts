import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRep: Repository<Wishlist>,
  ) {}

  async create(createWishlistDto: CreateWishlistDto) {
    const { title } = createWishlistDto;

    const newWishlist = new Wishlist();
    newWishlist.title = title;

    await this.wishlistRep.save(newWishlist);

    return newWishlist;
  }

  async findAll() {
    return await this.wishlistRep.find();
  }

  async findOne(id: string) {
    const wishlist = await this.wishlistRep.findOneBy({ id });

    if (!wishlist) throw new NotFoundException();

    return wishlist;
  }

  // TODO:
  update(id: string, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  // TODO:
  remove(id: string) {
    return `This action removes a #${id} wishlist`;
  }
}
