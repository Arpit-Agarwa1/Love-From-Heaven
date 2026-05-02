/**
 * Turns model objects into the JSON shape the React app expects (only the fields we want to share).
 * @param {import('../models/Product.js').Product[]} products
 */
export function productListView(products) {
  return {
    data: products.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      priceLabel: p.priceLabel,
    })),
  };
}
