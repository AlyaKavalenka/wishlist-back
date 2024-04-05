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

  async findOne(wishlist_id: string) {
    const wishlist = await this.wishlistRep.findOneBy({ wishlist_id });

    if (!wishlist) throw new NotFoundException();

    return wishlist;
  }

  // TODO:
  update(wishlist_id: string, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${wishlist_id} wishlist`;
  }

  async remove(wishlist_id: string) {
    const wishlist = await this.findOne(wishlist_id);

    await this.wishlistRep.remove(wishlist);

    return;
  }
}
