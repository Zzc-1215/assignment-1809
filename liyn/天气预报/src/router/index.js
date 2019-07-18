import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Weather from '@/components/weather'
import Three from '@/components/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})
