import * as productModel from '../models/Product.js';
import { productListView } from '../views/productView.js';

/**
 * GET /api/products/featured — sends the list of treats shown on the home page.
 * @type {import('express').RequestHandler}
 */
export function getFeatured(_req, res, next) {
  try {
    const products = productModel.findFeatured();
    res.json(productListView(products));
  } catch (err) {
    next(err);
  }
}
