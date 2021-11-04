const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{html,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black:colors.black,
      white:colors.white
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
