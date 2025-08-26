/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    screens: {
      sm: '810px',
      md: '1200px',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        ice: '#F5FFFF',
        paleCyan: '#CCFFFF',
        aqua: '#68F8FD',
        teal: '#029297',
        darkTeal: '#01494B',
        offWhite: '#FAFAFA',
        lightGray: '#E6E6E6',
        mediumGray: '#B3B3B3',
        gray: '#808080',
        darkGray: '#333333',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
