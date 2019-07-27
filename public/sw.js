importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/97a1825b119d7d8d8603.css",
    "revision": "7ca931becd003271fb3928aaec2db62a"
  },
  {
    "url": "/_nuxt/a8a048bbb67366291f73.js",
    "revision": "f4c82963d60bec3bb494071da3b7b3c2"
  },
  {
    "url": "/_nuxt/b40b30faffa054dcc045.js",
    "revision": "2157933a2e069f8200a5e37b10f2653d"
  },
  {
    "url": "/_nuxt/ddbbc7b4cc6481ddd7ad.js",
    "revision": "c9d14c3639ec4e58b0db510bcbf50072"
  },
  {
    "url": "/_nuxt/f3ec48d924ed45700b64.js",
    "revision": "7f9c715c993cafc900734023c5fc6d06"
  },
  {
    "url": "/_nuxt/f44101751798dbec85e2.js",
    "revision": "978b8dfb8d57aedeeffd1240fa79fbc8"
  },
  {
    "url": "/_nuxt/f4ef39cc170521d0d4c0.js",
    "revision": "ac8987e1aa1dfc0d105d3e618847ecb3"
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
