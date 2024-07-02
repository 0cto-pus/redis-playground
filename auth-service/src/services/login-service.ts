import redisClient from '../redis/redis-client';

interface UserSession {
  userId: string;
  token: string;
  expires: number;
}

export const createSession = async (
  userId: string,
  token: string
): Promise<void> => {
  const cacheKey = `session:${userId}`;
  const sessionData: UserSession = {
    userId,
    token,
    expires: Date.now() + 3600 * 1000,
  };
  await redisClient.set(cacheKey, JSON.stringify(sessionData), { EX: 3600 });
  redisClient.publish('userLogin', JSON.stringify({ userId }));
};

export const getSession = async (
  userId: string
): Promise<UserSession | null> => {
  const cacheKey = `session:${userId}`;
  const cachedSession = await redisClient.get(cacheKey);

  return cachedSession ? JSON.parse(cachedSession) : null;
};
