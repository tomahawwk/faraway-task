/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      h1: [
        '54px',
        {
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
    },
    backgroundSize: {
      contain: 'contain',
      cover: 'cover',
    },
    extend: {
      spacing: {
        xs: '12px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
      },
      colors: {
        primary: {main: '#FDF1AA', dark: '#54513d'},
        secondary: {main: '#141414', dark: '#0a0a0a'},
        black: '#202021',
        grey: '#404040',
      },
      fontFamily: {
        marlin: ['MarlinSans', 'sans-serif'],
      },
      transitionTimingFunction: {
        cubic: 'cubic-bezier(.77,0,.175,1)',
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
      },
      backgroundImage: {
        'no-photo': 'url("/public/images/no-photo.jpg")',
      },
    },
  },
  plugins: [],
});
