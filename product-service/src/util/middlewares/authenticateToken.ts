import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getSession } from '../../services/session-service';
import { secretKey } from '../../config/config';

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.get('Authorization');
  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const decoded: any = jwt.verify(token.split(' ')[1], secretKey!);
    const session = await getSession(decoded.userId); // This prevents session hijacking. Consider a token with a very long expiration date.
    console.log(session);
    if (!session || session.token !== token.split(' ')[1]) {
      return res.sendStatus(403);
    }

    req.body.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};
