import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/global.scss'
import '@/assets/css/reset.scss'
import 'normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import instance from '@/http/index';
import Moment from 'moment'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = instance;
Vue.prototype.$moment = Moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
