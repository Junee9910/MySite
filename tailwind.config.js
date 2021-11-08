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
      white:colors.white,
      gray:colors.blueGray,
      cyan:colors.cyan
    },
    backgroundImage: {
      1: "url('src/assets/img/1.jpg')",
      2: "url('src/assets/img/2.jpg')",
      3: "url('src/assets/img/3.jpg')",
      4: "url('src/assets/img/4.jpg')",
      5: "url('src/assets/img/5.jpg')"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
