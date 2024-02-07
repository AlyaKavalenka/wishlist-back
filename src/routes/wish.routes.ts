import { Router } from 'express';
import wishController from '../controller/wish.controller';

const router = Router();

router.post('/wish', wishController.createWish);
// router.get('/wishlist', wishController.getWishlistsByUser);
// router.get('/wishlist', wishController.getUsers);
// router.get('/wishlist/:id', wishController.getOneUser);
// router.put('/wishlist', wishController.updateUser);
// router.delete('/wishlist/:id', wishController.deleteWishlist);

export default router;
