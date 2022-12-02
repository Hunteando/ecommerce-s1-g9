import express from 'express';
import userRoutes from './userRoutes';
import cartRoutes from './cartRoutes';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/cart', cartRoutes);

export default router;
