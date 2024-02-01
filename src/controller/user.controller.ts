import { Request, Response } from 'express';
import db from '../db';

class UserController {
  async createUser(req: { body: { username: string } }, res: Response) {
    const { username } = req.body;
    const newPerson = await db.query('INSERT INTO users (username) values ($1) RETURNING *', [username]);
    res.json(newPerson.rows[0]);
  }
  async getUsers(_req: Request, res: Response) {
    const users = await db.query('SELECT * FROM users');
    res.json(users.rows);
  }
  async getOneUser(req: { params: { id: number } }, res: Response) {
    const id = req.params.id;
    const user = await db.query('SELECT * FROM users where id = $1', [id]);
    res.json(user.rows[0]);
  }
  async updateUser(req: { body: { username: string, id: number } }, res: Response) {
    const { username, id } = req.body;
    const user = await db.query('UPDATE users set username = $1, where id = $2 RETURNING *', [username, id]);
    res.json(user.rows[0]);
  }
  async deleteUser(req: { params: { id: number } }, res: Response) {
    const id = req.params.id;
    const user = await db.query('DELETE FROM users where id = $1', [id]);
    res.json(user.rows[0]);
  }
}

export default new UserController();
