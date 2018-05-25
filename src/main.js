import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import VueCarousel from 'vue-carousel'
import { store } from './store'
import DateFilter from './filters/date'
import DateTimeFilter from './filters/dateTime'

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

Vue.filter('date', DateFilter)
Vue.filter('dateTime', DateTimeFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.dispatch('createSets')
    this.$store.dispatch('createSubtypes')
    this.$store.dispatch('createSupertypes')
    this.$store.dispatch('createTypes')
  }
})
