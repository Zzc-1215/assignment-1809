import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import search from './subject/search.vue'
import weatherDetail from '../subject/weatherDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/head',
      name: 'head',
    },
    {
      path: '/search',
      name: 'search',
    },
    {
      path: '/weatherDetail',
      name: 'weatherDetail',
    }
  ]
})
