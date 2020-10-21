const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        fontFamily: {
            'display': ['Lato'],
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}