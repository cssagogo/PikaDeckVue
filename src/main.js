import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import VueCarousel from 'vue-carousel'

Vue.use(Vuetify, {
  theme: {
    primary: colors.yellow.darken2,
    secondary: colors.grey.lighten3,
    accent: colors.lightBlue.base,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
})

Vue.use(VueCarousel)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
