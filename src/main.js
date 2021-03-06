import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import './assets/css/styles.scss'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
