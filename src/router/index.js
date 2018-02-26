import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/auth'

import store from '@/store'
import userRoutes from '@/components/modules/user/routes'
// import Catalog from '@/components/modules/Catalog'
// import testsRoutes from '@/components/modules/tests/routes'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: Auth,
      children: [
        // {
        //   path: 'catalog',
        //   name: 'Catalog',
        //   component: Catalog,
        //   children: [
        //     ...testsRoutes
        //   ]
        // },
        // {
        //   path: '/',
        //   name: 'Hello',
        //   component: HelloWorld
        // },
        // {
        //   path: '/other',
        //   name: 'Other',
        //   component: Other
        // }
      ]
    },
    ...userRoutes
  ]
})
var unauthenticatedPages = ['SignIn']

router.beforeEach((to, from, next) => {
  // check we have a user
  store.dispatch('user/restoreUser')
  if (unauthenticatedPages.indexOf(to.name) !== -1) return next()
  if (!store.state.user.logged) return next({ path: '/sign-in' })
  next()
})


export default router
