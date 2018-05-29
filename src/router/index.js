import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Decks from '@/components/Deck/Decks'
import Deck from '@/components/Deck/Deck'
import BuildDeck from '@/components/Deck/BuildDeck'
import Sets from '@/components/Set/Sets'
import Set from '@/components/Set/Set'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import AuthGuard from './auth-guard'

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
      path: '/decks/:id',
      name: 'Deck',
      props: true,
      component: Deck
    },
    {
      path: '/deck/new',
      name: 'BuildDeck',
      component: BuildDeck,
      beforeEnter: AuthGuard
    },
    {
      path: '/sets',
      name: 'Sets',
      component: Sets
    },
    {
      path: '/sets/:code/:seoTitle',
      name: 'Set',
      props: true,
      component: Set
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
})
