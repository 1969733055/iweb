import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import axios from 'axios'
const $axios=axios.create({
  baseURL:"http://127.0.0.1:5050",
  headers:{
    "Content-Type":"application/x-www-form-urlencoded"
  }
});
Vue.prototype.$http=$axios;

// 引入Bootstrap-vue和Bootstrap
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue); // 在全局注册组件

// 是否为线上环境
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
