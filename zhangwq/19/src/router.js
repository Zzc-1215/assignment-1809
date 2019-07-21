import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './components/index.vue';
import search from './components/search.vue';
import details from './components/details.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'index',
            component:index,
        },
        {
            path:'/search',
            name:'search',
            component:search,
        },
        {
            path:'/details',
            name:'details',
            component:details,
        },
    ]
})

export default router;