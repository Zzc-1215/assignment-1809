import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import VueAxios from "vue-axios"
import axios from "axios"
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
