import Vue from 'vue'
import Router from 'vue-router'
import Sea from './views/seatch.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Sea
    },
    {
      path: '/byday',
      name: 'days',
      component: () => import('./views/days.vue')
    },
    {
      path: '/today',
      name: 'today',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/today.vue')
    }
  ]
})
