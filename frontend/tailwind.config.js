/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        heaven: {
          cream: '#FDF8F3',
          blush: '#F5E6E0',
          rose: '#B76E79',
          gold: '#C9A227',
          cocoa: '#3D3229',
          mist: '#E8E4DF',
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
