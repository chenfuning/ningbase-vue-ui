// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入封装好的axios
import api from './http/index'
//font-awesome 图标库
import 'font-awesome/css/font-awesome.min.css'
//状态管理仓库
import store from "./store";

Vue.config.productionTip = false

Vue.use(ElementUI)
//引入封装好的axios
Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
