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
    link: [{ rel: 'apple-touch-icon', href: '/splash/apple-icon-180.png' }],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2048-2732.jpg', media:'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2732-2048.jpg', media:'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1668-2388.jpg', media:'(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2388-1668.jpg', media:'(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1536-2048.jpg', media:'(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2048-1536.jpg', media:'(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1668-2224.jpg', media:'(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2224-1668.jpg', media:'(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1620-2160.jpg', media:'(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2160-1620.jpg', media:'(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1284-2778.jpg', media:'(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2778-1284.jpg', media:'(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1170-2532.jpg', media:'(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2532-1170.jpg', media:'(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1125-2436.jpg', media:'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2436-1125.jpg', media:'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1242-2688.jpg', media:'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2688-1242.jpg', media:'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-828-1792.jpg', media:'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1792-828.jpg', media:'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1242-2208.jpg', media:'(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-2208-1242.jpg', media:'(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-750-1334.jpg', media:'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1334-750.jpg', media:'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-640-1136.jpg', media:'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    link: [{ rel: 'apple-touch-startup-image', href: 'splash/apple-splash-1136-640.jpg', media:'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
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
      lang: 'fi',
      title: 'Kaasulla.app',
      description: 'Löydä lähin kaasutankkausasemat',
    },
    icon:{
      source: '~/assets/img/logo-shape.png'
    },
    meta:{
      name: 'Kaasulla.app',
      author: 'Andreas Koutsoukos',
      description: 'Löydä lähin kaasutankkausasemat',
      theme_color: '#167ACE',
      ogSiteName: 'Kaasulla.app',
      ogTitle: 'Kaasutankkausasemat',
      ogDescription: 'Löydä lähin kaasutankkausasemat',
      ogImage: '~/assets/img/app-in-devices.png',
      ogUrl: 'https://kaasulla.app',
    }
  },

  /*
   ** Global Fonts
   */
  webfontloader: {
    google: {
      families: ['Lato:300,400,700,900'], //Loads Lato font with weights 400 and 700
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
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
}
