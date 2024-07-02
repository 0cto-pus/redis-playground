import redisClient from '../redis/redis-client';

interface UserSession {
  userId: string;
  token: string;
  expires: number;
}

export const getSession = async (
  userId: string
): Promise<UserSession | null> => {
  const cacheKey = `session:${userId}`;
  const cachedSession = await redisClient.get(cacheKey);
  return cachedSession ? JSON.parse(cachedSession) : null;
};
