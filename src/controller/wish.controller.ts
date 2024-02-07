import { Response } from 'express';
import db from '../db';

class WishController {
  async createWish(req: { body: { wishlist_id: number, name: string, description: string, link: string, photos: string[] } }, res: Response) {
    const { wishlist_id, name, description, link, photos } = req.body;
    const newWish = await db.query('INSERT INTO wishes (wishlist_id, name, description, link, photos) values ($1, $2, $3, $4, $5) RETURNING *', [
      wishlist_id,
      name,
      description,
      link,
      photos,
    ]);
    res.json(newWish.rows[0]);
  }
  async getWishesByWishlist(req: { query: { wishlist_id: number } }, res: Response) {
    const wishlist_id = req.query.wishlist_id;
    const wishlists = await db.query('SELECT * from wishes where wishlist_id = $1', [wishlist_id]);
    res.json(wishlists.rows);
  }
  // async getUsers(_req: any, res: Response) {
  //   const users = await db.query('SELECT * FROM person');
  //   res.json(users.rows);
  // }
  // async getOneUser(req: { params: { id: any } }, res: Response) {
  //   const id = req.params.id;
  //   const user = await db.query('SELECT * FROM person where id = $1', [id]);
  //   res.json(user.rows[0]);
  // }
  // async updateUser(req: { body: person }, res: Response) {
  //   const { id, name, surname } = req.body;
  //   const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id]);
  //   res.json(user.rows[0]);
  // }
  // async deleteWish(req: { params: { id: number } }, res: Response) {
  //   const { id } = req.params;
  //   const user = await db.query('DELETE FROM wishlists where id = $1', [id]);
  //   res.json(user.rows[0]);
  // }
}

export default new WishController();
