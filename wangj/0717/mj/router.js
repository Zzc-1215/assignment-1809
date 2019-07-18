import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Search from './components/search.vue'
import hoem from './components/hoem.vue'
import personal from './components/personal.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Search',
        component: Search
    }, {
        path: '/hoem',
        name: 'hoem',
        component: hoem
    }, {
        path: '/personal',
        name: 'personal',
        component: personal
    }]
})