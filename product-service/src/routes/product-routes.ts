import { Router } from 'express';
import { getProduct } from '../controllers/product-controller';
import { authenticateToken } from '../util/middlewares/authenticateToken';

const router = Router();

router.get('/:id', authenticateToken, getProduct);

export default router;
