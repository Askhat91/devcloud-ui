import Vue from 'vue'
import App from './App.vue'
import vuetify from './config/vuetify'
import router from './config/router'
import store from './store'
import {
  setupComponents
} from './config/components'
import axios from './config/axios'

Vue.config.productionTip = false

setupComponents(Vue)

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
