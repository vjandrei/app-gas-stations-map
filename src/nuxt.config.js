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
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap',
      },
      { rel: 'stylesheet', href: '//unpkg.com/leaflet/dist/leaflet.css' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
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
  css: ['~/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/leaflet.js', ssr: false }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Build configuration
   */
  buildDir: 'nuxt',
  build: {
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
