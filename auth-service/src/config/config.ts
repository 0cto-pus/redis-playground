import dotEnv from 'dotenv';

dotEnv.config();

export const secretKey = process.env.JWT_SECRET;
export const redisUrl = process.env.REDIS_URL;
