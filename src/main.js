import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueI18n from 'vue-i18n'
import WebSocketApi from './WebSocketApi'
import { messages } from './translation/translate'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueI18n)

window.ws = new WebSocketApi()

const i18n = new VueI18n({
  locale: navigator.language,
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
