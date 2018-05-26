import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import './scss/main.scss'
import colors from 'vuetify/es5/util/colors'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import DateTimeFilter from './filters/dateTime'
import AlertComponent from './components/Shared/Alert.vue'

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
Vue.component('app-alert', AlertComponent)

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
    firebase.initializeApp({
      apiKey: 'AIzaSyDXKwo2ZC1IF3HjnG6sRT3y4zwzCOK6k38',
      authDomain: 'pikadeckvue.firebaseapp.com',
      databaseURL: 'https://pikadeckvue.firebaseio.com',
      projectId: 'pikadeckvue',
      storageBucket: 'pikadeckvue.appspot.com'
    })
  }
})
