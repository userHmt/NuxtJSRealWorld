import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e64a666 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0a59b342 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _4114fd66 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _28f20c66 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _f2e0ddf4 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _560259e0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _0fbc4fb3 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3e64a666,
    children: [{
      path: "",
      component: _0a59b342,
      name: "home"
    }, {
      path: "/login",
      component: _4114fd66,
      name: "login"
    }, {
      path: "/register",
      component: _4114fd66,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _28f20c66,
      name: "profile"
    }, {
      path: "/setting",
      component: _f2e0ddf4,
      name: "setting"
    }, {
      path: "/editor",
      component: _560259e0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _0fbc4fb3,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
