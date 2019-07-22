import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'




Vue.use(vueAxios, axios)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')