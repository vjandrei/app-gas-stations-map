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
        light: 'var(--color-light)',
        brand: 'var(--color-brand)',
        fade: 'var(--color-fade)',

        primary_dark: 'var(--color-primary-dark)',
        primary_default: 'var(--color-primary-defaul)',
        primary_light: 'var(--color-primary-light)',
        default: 'var(--color-default)',
        secondary_dark: 'var(--color-secondary-dark)',
        secondary_default: 'var(--color-secondary-defaul)',
        secondary_light: 'var(--color-secondary-light)',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}
