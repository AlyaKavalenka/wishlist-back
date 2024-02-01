import { Router } from 'express';
import wishlistController from '../controller/wishlist.controller';

const router = Router();

router.post('/wishlist', wishlistController.createWishlist);
router.get('/wishlist', wishlistController.getWishlistsByUser);
// router.get('/wishlist', wishlistController.getUsers);
// router.get('/wishlist/:id', wishlistController.getOneUser);
// router.put('/wishlist', wishlistController.updateUser);
// router.delete('/wishlist/:id', wishlistController.deleteUser);

export default router;
