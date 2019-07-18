import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './components/index.vue';
import search from './components/search.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        {
            path:'/index',
            name:'index',
            component:index,
        },
        {
            path:'/search',
            name:'search',
            component:search,
        },
    ]
})

export default router;