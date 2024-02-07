import { Response } from 'express';
import db from '../db';

class WishlistController {
  async createWishlist(req: { body: { title: string, user_id: number } }, res: Response) {
    const { title, user_id } = req.body;
    const newWishlist = await db.query('INSERT INTO wishlists (title, user_id) values ($1, $2) RETURNING *', [title, user_id]);
    res.json(newWishlist.rows[0]);
  }
  async getWishlistsByUser(req: { query: { id: number } }, res: Response) {
    const id = req.query.id;
    const wishlists = await db.query('SELECT * from wishlists where user_id = $1', [id]);
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
  async deleteWishlist(req: { params: { id: number } }, res: Response) {
    const { id } = req.params;
    const user = await db.query('DELETE FROM wishlists where id = $1', [id]);
    res.json(user.rows[0]);
  }
}

export default new WishlistController();
