import express from 'express';
import { getCart } from '../controllers';
const router = express.Router();

router.get('/', getCart);

export default router;
