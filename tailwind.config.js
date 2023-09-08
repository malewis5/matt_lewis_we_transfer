/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      textColor: {
        primaryBlack: '#222222',
        secondaryBlack: '#9A9A9A',
      },
      colors: {
        primary: {
          100: '#F2DFF2',
          200: '#E6BFE6',
          300: '#D9A0D9',
          400: '#CC80CC',
          500: '#9F0086',
          600: '#80006A',
          700: '#61004E',
          800: '#420032',
          900: '#230016',
        },
        primaryBlack: '#222222',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
