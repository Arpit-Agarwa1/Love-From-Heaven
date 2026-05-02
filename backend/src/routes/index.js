import { Router } from 'express';
import { productRoutes } from './productRoutes.js';

export const apiRouter = Router();

apiRouter.use('/products', productRoutes);
