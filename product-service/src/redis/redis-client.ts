import { createClient } from 'redis';
import { redisUrl } from '../config/config';

const redisClient = createClient({
  url: redisUrl,
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
})();

export default redisClient;
