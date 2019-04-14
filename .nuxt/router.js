import Vue from 'vue'
import Router from 'vue-router'

const _5db641d4 = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _18cd916b = () => import('../pages/order.vue' /* webpackChunkName: "pages/order" */).then(m => m.default || m)
const _ceab46f8 = () => import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */).then(m => m.default || m)
const _2dcaeada = () => import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */).then(m => m.default || m)
const _114b02ee = () => import('../pages/changeCity.vue' /* webpackChunkName: "pages/changeCity" */).then(m => m.default || m)
const _6a309991 = () => import('../pages/exit.vue' /* webpackChunkName: "pages/exit" */).then(m => m.default || m)
const _6cab17f4 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _74733957 = () => import('../pages/products.vue' /* webpackChunkName: "pages/products" */).then(m => m.default || m)
const _0002d0ef = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/register",
			component: _5db641d4,
			name: "register"
		},
		{
			path: "/order",
			component: _18cd916b,
			name: "order"
		},
		{
			path: "/detail",
			component: _ceab46f8,
			name: "detail"
		},
		{
			path: "/cart",
			component: _2dcaeada,
			name: "cart"
		},
		{
			path: "/changeCity",
			component: _114b02ee,
			name: "changeCity"
		},
		{
			path: "/exit",
			component: _6a309991,
			name: "exit"
		},
		{
			path: "/login",
			component: _6cab17f4,
			name: "login"
		},
		{
			path: "/products",
			component: _74733957,
			name: "products"
		},
		{
			path: "/",
			component: _0002d0ef,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
