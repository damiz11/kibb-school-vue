// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style/style.css'
import './assets/css/style/default.css'
import './assets/css/style/style-responsive.css'
import '@fortawesome/fontawesome'
import 'animate.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrappVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrappVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
