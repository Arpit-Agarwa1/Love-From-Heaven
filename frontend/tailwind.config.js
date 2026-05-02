/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        heaven: {
          /** Page canvas — warm near-white */
          cream: '#FFFBFA',
          /** Soft tint that pairs with brand rose */
          blush: '#F3E6ED',
          /** Primary brand color */
          rose: '#CA6490',
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
      boxShadow: {
        soft: '0 1px 3px rgba(61, 50, 41, 0.04), 0 6px 20px -6px rgba(61, 50, 41, 0.08)',
        'soft-lg': '0 2px 8px rgba(61, 50, 41, 0.05), 0 12px 40px -12px rgba(61, 50, 41, 0.12)',
        header: '0 1px 0 rgba(61, 50, 41, 0.04), 0 8px 24px -10px rgba(61, 50, 41, 0.08)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
