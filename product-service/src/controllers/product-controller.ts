import { Request, Response } from 'express';
import { getProductById } from '../services/product-service';

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await getProductById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
