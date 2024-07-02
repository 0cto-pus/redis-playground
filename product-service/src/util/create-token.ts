import jwt from 'jsonwebtoken';
const secretKey = process.env.JWT_SECRET;

export const generateToken = (userId: string): string => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey!, { expiresIn: '1h' });
  return token;
};
