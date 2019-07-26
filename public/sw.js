importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1b851dbca24ea78e400f.js",
    "revision": "162034d2220e00596e4603daa6789bd5"
  },
  {
    "url": "/_nuxt/58867d688a9339cf925c.js",
    "revision": "c190885b63ad54cfcd5a65b3f40a03c8"
  },
  {
    "url": "/_nuxt/78e70f56c6d81594d331.js",
    "revision": "77b9bc670be0902a4df3611147b7dc77"
  },
  {
    "url": "/_nuxt/799341e91e1202368224.js",
    "revision": "9d4753c32e262be4d884689c92ed23ef"
  },
  {
    "url": "/_nuxt/83ce085be7eb8c6c3740.js",
    "revision": "c3857e43c90afe55b8a1f84a83a12760"
  },
  {
    "url": "/_nuxt/97a1825b119d7d8d8603.css",
    "revision": "7ca931becd003271fb3928aaec2db62a"
  },
  {
    "url": "/_nuxt/b0fa13b9c6de0f845364.js",
    "revision": "8dc34adf5529ad40af680e077038385b"
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
