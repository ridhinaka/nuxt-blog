import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _799ad938 = () => interopDefault(import('../pages/audiotes2.vue' /* webpackChunkName: "pages/audiotes2" */))
const _4788a919 = () => interopDefault(import('../pages/end.vue' /* webpackChunkName: "pages/end" */))
const _64a2fcae = () => interopDefault(import('../pages/fade.vue' /* webpackChunkName: "pages/fade" */))
const _58483c78 = () => interopDefault(import('../pages/grid.vue' /* webpackChunkName: "pages/grid" */))
const _48e7bae6 = () => interopDefault(import('../pages/okay-page.vue' /* webpackChunkName: "pages/okay-page" */))
const _4aa3ba13 = () => interopDefault(import('../pages/present-page.vue' /* webpackChunkName: "pages/present-page" */))
const _d8151d40 = () => interopDefault(import('../pages/state.js' /* webpackChunkName: "pages/state" */))
const _527de4e0 = () => interopDefault(import('../pages/tes.vue' /* webpackChunkName: "pages/tes" */))
const _92ff998e = () => interopDefault(import('../pages/video.vue' /* webpackChunkName: "pages/video" */))
const _b943fb2e = () => interopDefault(import('../pages/virtual-birthdaycake.vue' /* webpackChunkName: "pages/virtual-birthdaycake" */))
const _36eb4410 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/audiotes2",
    component: _799ad938,
    name: "audiotes2"
  }, {
    path: "/end",
    component: _4788a919,
    name: "end"
  }, {
    path: "/fade",
    component: _64a2fcae,
    name: "fade"
  }, {
    path: "/grid",
    component: _58483c78,
    name: "grid"
  }, {
    path: "/okay-page",
    component: _48e7bae6,
    name: "okay-page"
  }, {
    path: "/present-page",
    component: _4aa3ba13,
    name: "present-page"
  }, {
    path: "/state",
    component: _d8151d40,
    name: "state"
  }, {
    path: "/tes",
    component: _527de4e0,
    name: "tes"
  }, {
    path: "/video",
    component: _92ff998e,
    name: "video"
  }, {
    path: "/virtual-birthdaycake",
    component: _b943fb2e,
    name: "virtual-birthdaycake"
  }, {
    path: "/",
    component: _36eb4410,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
