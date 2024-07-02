import { Router } from 'express';
import redisClient from './redisClient';

const router = Router();

router.get('/session/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const cachedSessionData = await redisClient.get(`session:${userId}`);
    if (cachedSessionData) {
      res.status(200).json({ sessionData: JSON.parse(cachedSessionData) });
    } else {
      res.status(404).json({ message: 'Session data not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error', error: err });
  }
});

export default router;
