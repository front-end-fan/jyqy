// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import "babel-polyfill" //让ie兼容es6
import ElementUI from 'element-ui'
import 'element-ui/packages/theme-chalk/lib/index.css'

//import './assets/libs/jquery'
import $ from 'jquery'
import './assets/libs/bootstrap.min'
import './assets/libs/jquery.dotdotdot.min'
import './assets/libs/common.js'
import './assets/libs/swiper-3.4.2.min.js'
import './assets/libs/swiper-3.4.2.min.css'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api;

// 引用工具文件
import utils  from './utils/index.js'
Vue.prototype.$utils  = utils ;

Vue.config.productionTip = false;  //设置为 false 以阻止 vue 在启动时生成生产提示。

/* eslint-disable no-new */
Vue.use(ElementUI);//使用ElementUI
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
