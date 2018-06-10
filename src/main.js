import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueLazyload from 'vue-lazyload'
import vSelect from 'vue-select'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import * as firebase from 'firebase'
import App from './App'
import './scss/main.scss'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import DateTimeFilter from './filters/dateTime'
import SeoTitleFilter from './filters/seoTitle'
import AlertComponent from './components/Shared/Alert.vue'
import BarChartComponent from './components/Shared/BarChart.vue'
import CardListComponent from './components/Shared/CardList.vue'
import CardInfoComponent from './components/Shared/CardInfo.vue'
import EnergyIconComponent from './components/Shared/EnergyIcon.vue'
import PrintCardsComponent from './components/Shared/PrintCards.vue'
import SearchDialogComponent from './components/Shared/SearchDialog.vue'

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
Vue.use(VueLazyload)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.filter('dateTime', DateTimeFilter)
Vue.filter('seoTitle', SeoTitleFilter)
Vue.component('v-select', vSelect)
Vue.component('app-alert', AlertComponent)
Vue.component('app-bar-chart', BarChartComponent)
Vue.component('app-card-info', CardInfoComponent)
Vue.component('app-card-list', CardListComponent)
Vue.component('app-energy-icon', EnergyIconComponent)
Vue.component('app-print-cards', PrintCardsComponent)
Vue.component('app-search-dialog', SearchDialogComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXKwo2ZC1IF3HjnG6sRT3y4zwzCOK6k38',
      authDomain: 'pikadeckvue.firebaseapp.com',
      databaseURL: 'https://pikadeckvue.firebaseio.com',
      projectId: 'pikadeckvue',
      storageBucket: 'pikadeckvue.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadSets')
    this.$store.dispatch('loadSubtypes')
    this.$store.dispatch('loadSupertypes')
    this.$store.dispatch('loadTypes')
    this.$store.dispatch('loadDecks')
  }
})
