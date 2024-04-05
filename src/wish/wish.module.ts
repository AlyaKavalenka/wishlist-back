import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wish } from './entities/wish.entity';
import { Wishlist } from 'src/wishlist/entities/wishlist.entity';
import { WishlistService } from 'src/wishlist/wishlist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wish, Wishlist])],
  controllers: [WishController],
  providers: [WishService, WishlistService],
})
export class WishModule {}
