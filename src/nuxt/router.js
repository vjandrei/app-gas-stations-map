import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47672644 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
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
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _47672644,
    name: "about"
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

export function createRouter () {
  return new Router(routerOptions)
}
