/**
 * One bakery item in our sample list.
 * @typedef {object} Product
 * @property {string} id — stable id used in code and URLs
 * @property {string} name — title shown on the site
 * @property {string} description — short blurb
 * @property {string} priceLabel — price text (can say “From $…”)
 * @property {boolean} featured — if true, it can show on the home page
 */

/** Sample treats stored in code (later you can move this to a database). @type {Product[]} */
const catalog = [
  {
    id: 'vanilla-cloud-cake',
    name: 'Vanilla cloud cake',
    description: 'Soft vanilla layers and smooth buttercream. Nice for birthdays.',
    priceLabel: 'From $45',
    featured: true,
  },
  {
    id: 'rose-thumbprints',
    name: 'Rose thumbprint cookies',
    description: 'Buttery cookies with a little jam in the middle. Flavor changes with the season.',
    priceLabel: '$18 / dozen',
    featured: true,
  },
  {
    id: 'heaven-brownies',
    name: 'Fudge brownies',
    description: 'Rich chocolate, slightly crisp on top. We bake them in small trays.',
    priceLabel: '$24 / 9-piece',
    featured: true,
  },
];

/** @returns {Product[]} all treats marked as featured for the home page */
export function findFeatured() {
  return catalog.filter((p) => p.featured);
}

/** @param {string} id @returns {Product | undefined} one treat by id (handy for a detail page later) */
export function findById(id) {
  return catalog.find((p) => p.id === id);
}
