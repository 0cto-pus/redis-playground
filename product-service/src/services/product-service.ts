import redisClient from '../redis/redis-client';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 100, description: 'Description 1' },
  { id: '2', name: 'Product 2', price: 200, description: 'Description 2' },
];

export const getProductById = async (id: string): Promise<Product | null> => {
  const cacheKey = `product:${id}`;
  const cachedProduct = await redisClient.get(cacheKey);
  if (cachedProduct) {
    return JSON.parse(cachedProduct);
  }

  const product = products.find((p) => p.id === id) || null;

  if (product) {
    await redisClient.set(cacheKey, JSON.stringify(product), { EX: 3600 });
  }

  return product;
};
