import { Router } from 'express';
import * as productController from '../controllers/productController.js';

export const productRoutes = Router();

productRoutes.get('/featured', productController.getFeatured);
