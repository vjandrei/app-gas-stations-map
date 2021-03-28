import path from 'path'
import fs from 'fs'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kaasutankkausasemat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },

  // Auto import components https://github.com/nuxt/components
  components: true,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fullHeight.js', mode: 'client' },
    { src: '~/plugins/leaflet-routing-machine.js', mode: 'client' },
    // { src: '~/plugins/slidingPanel.js', mode: 'client' },
    // I you liked to use it just yarn install vue2-touch-events { src: '~/plugins/vue2-touch-events.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      title: 'Kaasuasemat',
      description: 'Löydä lähin kaasuasema',
    },
  },

  /*
   ** Global Fonts
   */
  webfontloader: {
    google: {
      families: ['Lato:300,400,700'], //Loads Lato font with weights 400 and 700
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    friendlyErrors: false,
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    },
  },

  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
}
