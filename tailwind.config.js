module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      display: ['Lato'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        default: 'var(--color-default)',
        dark: 'var(--color-dark)',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}
