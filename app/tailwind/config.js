/*global module*/
module.exports = {
  theme: {
    extend: {},
    truncate: {
      lines: {
          2: '2',
          3: '3',
          5: '5',
          8: '8',
      }
  }
  },
  variants: {},
  plugins: [
    require('tailwindcss-truncate-multiline')(),
  ],
}
