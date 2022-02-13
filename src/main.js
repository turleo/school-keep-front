import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import WebSocketApi from './WebSocketApi'

Vue.config.productionTip = false

Vue.use(VueMaterial)

window.ws = new WebSocketApi()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
