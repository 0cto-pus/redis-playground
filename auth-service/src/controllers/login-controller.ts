import { Request, Response } from 'express';
import { createSession, getSession } from '../services/login-service';
import { generateToken } from '../util/create-token';

export const createSessionHandler = async (req: Request, res: Response) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  const token = generateToken(userId);

  await createSession(userId, token);
  res.status(200).json(token);
};

export const getSessionHandler = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const session = await getSession(userId);

  if (session) {
    res.status(200).json(session);
  } else {
    res.status(404).json({ message: 'Session not found' });
  }
};
