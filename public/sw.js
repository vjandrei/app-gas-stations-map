importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4514b1c0440d8556bd9c.js",
    "revision": "f9f643f5b8ad5e1a4db1787518a92780"
  },
  {
    "url": "/_nuxt/4d5cee299fd8d88af96f.js",
    "revision": "f098dc59a2d68abba856f2f0cc38966c"
  },
  {
    "url": "/_nuxt/9ced77fc44cdac1687b6.css",
    "revision": "a49a6f3815c95a52a567c483412514f8"
  },
  {
    "url": "/_nuxt/af5306cd319246e47dcb.js",
    "revision": "da3703681dda71805403856d6b6fe0f1"
  },
  {
    "url": "/_nuxt/b2145daa9aa495943ff0.css",
    "revision": "dc8bfc07eef2f2cf00f9c0d007d75122"
  },
  {
    "url": "/_nuxt/f1d7f98a981c75931840.js",
    "revision": "8091e80811eb6f2d98a0bcb3b78339e0"
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
