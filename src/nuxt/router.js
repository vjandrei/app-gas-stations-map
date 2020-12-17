import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07c0a178 = () => interopDefault(import('../node_modules/@nuxtjs/tailwindcss/lib/ui/pages/index.vue' /* webpackChunkName: "" */))
const _47672644 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _76f54453 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _20e5a8fa = () => interopDefault(import('../pages/stations/_id.vue' /* webpackChunkName: "pages/stations/_id" */))
const _671f0109 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_tailwind",
    component: _07c0a178,
    name: "_tailwind"
  }, {
    path: "/about",
    component: _47672644,
    name: "about"
  }, {
    path: "/map",
    component: _76f54453,
    name: "map"
  }, {
    path: "/stations/:id?",
    component: _20e5a8fa,
    name: "stations-id"
  }, {
    path: "/",
    component: _671f0109,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
