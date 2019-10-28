import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios';

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

//引入store
import store from './store'

//注入mock
import './mock';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
