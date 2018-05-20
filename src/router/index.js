import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Decks from '@/components/Deck/Decks'
import BuildDeck from '@/components/Deck/BuildDeck'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/decks',
      name: 'Decks',
      component: Decks
    },
    {
      path: '/deck/new',
      name: 'BuildDeck',
      component: BuildDeck
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
