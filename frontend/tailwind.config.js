/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        heaven: {
          /** Page canvas — warm near-white */
          cream: '#FFFBFA',
          /** Soft tint that pairs with pastel crimson */
          blush: '#FCE8EE',
          /** Brand accent — pastel crimson */
          rose: '#f1a2bb',
          gold: '#C9A227',
          cocoa: '#3D3229',
          /** Cool-neutral with a hint of pink */
          mist: '#EDE6EA',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
