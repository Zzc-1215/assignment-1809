import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import head from './components/head.vue'
import search from './components/search.vue'
import futureWeather from './components/futureWeather.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'head',
      component: head,
    }, {
      path: '/search',
      name: 'search',
      component: search,
    }, {
      path: '/futureWeather',
      name: 'futureWeather',
      component: futureWeather,
    }
  ]
})
