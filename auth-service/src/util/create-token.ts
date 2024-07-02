import jwt from 'jsonwebtoken';
import { secretKey } from '../config/config';

export const generateToken = (userId: string): string => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey!, { expiresIn: '1h' });
  return token;
};
