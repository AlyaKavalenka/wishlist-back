import { Injectable } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { WishlistService } from 'src/wishlist/wishlist.service';
import { Wish } from './entities/wish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from 'src/wishlist/entities/wishlist.entity';

@Injectable()
export class WishService {
  constructor(
    private readonly wishlistService: WishlistService,
    @InjectRepository(Wish)
    private wishRep: Repository<Wish>,
  ) {}

  async create(createWishDto: CreateWishDto, wishlist_id: string) {
    const { name, description, links, photos } = createWishDto;

    const newWish = new Wish();
    newWish.name = name;
    newWish.description = description;
    newWish.links = links;
    newWish.photos = photos;

    const wishlist: Wishlist | null = wishlist_id
      ? await this.wishlistService.findOne(wishlist_id)
      : null;

    newWish.wishlist = wishlist;

    await this.wishRep.save(newWish);
    return newWish;
  }

  // TODO:
  findAll() {
    return `This action returns all wish`;
  }

  // TODO:
  findAllByWishlist(wishlist_id: string) {
    return `This action returns all wish by #${wishlist_id}`;
  }

  // TODO:
  findOne(wish_id: string) {
    return `This action returns a #${wish_id} wish`;
  }

  // TODO:
  update(wish_id: string, updateWishDto: UpdateWishDto) {
    return `This action updates a #${wish_id} wish`;
  }

  // TODO:
  remove(wish_id: string) {
    return `This action removes a #${wish_id} wish`;
  }
}
