importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0939398491e705fe541c.js",
    "revision": "d2579466392af0081dcb9fa9067b4f9e"
  },
  {
    "url": "/_nuxt/29976f2b8891f82e13bf.js",
    "revision": "58ff5e806a974c8295bcc759bce65735"
  },
  {
    "url": "/_nuxt/312051478a5d1f3dde11.js",
    "revision": "b771cf97789455fb276a99f1a94c5441"
  },
  {
    "url": "/_nuxt/32ec1302f82016796b72.css",
    "revision": "5586a720e4e48350a81faab7d7982ddf"
  },
  {
    "url": "/_nuxt/6549cacc55a21dccceb0.js",
    "revision": "b7fe3f825d4513074d5a0541619e7bef"
  },
  {
    "url": "/_nuxt/b1a577d0cc48883a62a6.js",
    "revision": "bfcc9db97af67a304882f09af5238da0"
  },
  {
    "url": "/_nuxt/b33822cd1f5e4e830255.js",
    "revision": "f2dea47aeb52765dfa6a5ec32215758d"
  },
  {
    "url": "/_nuxt/c5945334edfdf995eb44.js",
    "revision": "4135556ef45497d501b9ba3882647e58"
  },
  {
    "url": "/_nuxt/f4818a3e34d7242a404a.css",
    "revision": "b1e0d61d9d3c74cdb8558342d5ae4b88"
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
