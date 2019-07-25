importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e832c410fe681abdfb4.js",
    "revision": "eb6c78751e250d40edb3afd50ff540da"
  },
  {
    "url": "/_nuxt/418ad8104628758348ba.js",
    "revision": "e1b106c9caf17db38a834ae6c8ceb7c4"
  },
  {
    "url": "/_nuxt/65390dee5892dcc5e931.js",
    "revision": "29dc6e4444d8ebbf3b17c738805f8303"
  },
  {
    "url": "/_nuxt/b166bac5099c53237800.js",
    "revision": "a030b0d6c5018c44e3d3327ccae74539"
  },
  {
    "url": "/_nuxt/c6e7251c7c6e9d064a4b.css",
    "revision": "a558f2500b2e7240abe3e785640d1bbb"
  },
  {
    "url": "/_nuxt/c7983c8ec7bcfd0b29b7.js",
    "revision": "b14edae4f87696943caeb02ee82f52c5"
  }
], {
  "cacheId": "nuxt-firebase-ssr-base",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
