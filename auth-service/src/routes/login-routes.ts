import { Router } from 'express';
import {
  createSessionHandler,
  getSessionHandler,
} from '../controllers/login-controller';

const router = Router();

router.post('/login', createSessionHandler);

router.get('/:userId', getSessionHandler);

export default router;
