import Vue from 'vue'
import Router from 'vue-router'
import three from '@/components/three'
import City from '@/components/City'
import Aain from '@/components/aain'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/',
      name: 'City',
      component: City
    },
    {
      path: '/Aain',
      name: 'aain',
      component: Aain
    }
  ]
})
