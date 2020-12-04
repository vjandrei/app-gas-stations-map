const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      display: ['Lato']
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
