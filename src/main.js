import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vuex from 'vuex'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueI18n from 'vue-i18n'
import WebSocketApi from './WebSocketApi'
import { messages } from './translation/translate'
import * as bells from './data/bells/vuex_module'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueI18n)
Vue.use(Vuex)

const i18n = new VueI18n({
  locale: navigator.language,
  silentTranslationWarn: true,
  messages
})

const store = new Vuex.Store({
  modules: {
    bells: bells.default
  }
})

window.ws = new WebSocketApi()
window.store = store

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
