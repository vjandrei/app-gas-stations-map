import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f0734f0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7a610dff = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _5fab8357 = () => interopDefault(import('../pages/stations/_id.vue' /* webpackChunkName: "pages/stations/_id" */))
const _3ebf0fb5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1f0734f0,
    name: "about"
  }, {
    path: "/map",
    component: _7a610dff,
    name: "map"
  }, {
    path: "/stations/:id?",
    component: _5fab8357,
    name: "stations-id"
  }, {
    path: "/",
    component: _3ebf0fb5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
