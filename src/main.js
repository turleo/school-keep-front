import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { VueHammer } from 'vue2-hammer'
import Vuex from 'vuex'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueI18n from 'vue-i18n'
import WebSocketApi from './WebSocketApi'
import { messages } from './translation/translate'
import * as bells from './data/bells/vuex_module'
import * as hometasks from './data/hometasks/vuex_module'
import * as lessons from './data/lessons/vuex_module'
import * as subjects from './data/subjects/vuex_module'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueI18n)
Vue.use(VueHammer)
Vue.use(Vuex)

const i18n = new VueI18n({
  locale: navigator.language,
  silentTranslationWarn: true,
  messages
})

const store = new Vuex.Store({
  modules: {
    bells: bells.default,
    hometasks: hometasks.default,
    lessons: lessons.default,
    subjects: subjects.default
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
