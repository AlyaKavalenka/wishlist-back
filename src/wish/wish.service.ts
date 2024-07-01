import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { WishlistService } from 'src/wishlist/wishlist.service';
import { Wish } from './entities/wish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WishService {
  constructor(
    private readonly wishlistService: WishlistService,
    @InjectRepository(Wish)
    private wishRep: Repository<Wish>,
  ) {}

  async create(createWishDto: CreateWishDto) {
    const { name, description, links, photos, wishlists_id } = createWishDto;

    const newWish = new Wish();
    newWish.name = name;
    newWish.description = description;
    newWish.links = links;
    newWish.photos = photos;

    const checkedWishlistsIds = [];
    if (wishlists_id.length) {
      for (let i = 0; i < wishlists_id.length; i++) {
        const wishlist = await this.wishlistService.findOne(wishlists_id[i]);

        if (!!wishlist) {
          checkedWishlistsIds.push(wishlist);
        }
      }
    }
    newWish.wishlists = checkedWishlistsIds;

    await this.wishRep.save(newWish);
    return newWish;
  }

  async findAll() {
    return await this.wishRep.find();
  }

  async findAllByWishlist(wishlist_id: string) {
    const wishes = await this.wishRep.findBy({
      wishlists: {
        wishlist_id,
      },
    });
    if (!wishes) throw new NotFoundException();

    return wishes;
  }

  async findOne(wish_id: string) {
    const wish = await this.wishRep.findOneBy({ wish_id });

    if (!wish) throw new NotFoundException();
    return wish;
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
