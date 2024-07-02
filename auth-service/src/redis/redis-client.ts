import { createClient } from 'redis';
import { redisUrl } from '../config/config';

const redisClient = createClient({
  url: redisUrl,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

redisClient.connect();

export default redisClient;
