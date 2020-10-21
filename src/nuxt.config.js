import path from 'path';
import fs from 'fs';

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Kaasutankkausasemat Suomessa' || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, height=device-height,initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//unpkg.com/leaflet/dist/leaflet.css' },
    ],
  },
  env:{
    MAPBOX_KEY: process.env.MAPBOX_KEY
  },
  pwa: {
    meta: {
      /* meta options */
      title: 'Kaasuasemat',
      description: 'Löydä lähin kaasuasema',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/main.scss', 
    '~/assets/styles/tailwind.scss',
  ],
  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },
  /*
   ** Global Fonts
   */
  webfontloader: {
    google: {
      families: ['Lato:300,400,700'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/leaflet.js', ssr: false }, '~/plugins/hello.js'],
  /*
   ** Nuxt.js modules
   */
  exampleMsg: 'hello',
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
    'nuxt-webfontloader',
  ],
  customCounter: { option1: 'something' },
  buildModules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  buildDir: 'nuxt',
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-viewport-height-correction': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        
      },
      order: 'presetEnvAndCssnanoLast',
      preset: {
        stage: 2 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
      },
      
    },
    extractCSS: true,
    styleResources: {
      // your settings here
      sass: ['./assets/styles/_space.scss'], // alternative: scss
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    },
  },
};
