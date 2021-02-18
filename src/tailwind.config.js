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
        secondary: 'var(--color-secondary)',
        default: 'var(--color-default)',
        dark: 'var(--color-dark)'
      },
      inset: {
        '1/2': '50%'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
