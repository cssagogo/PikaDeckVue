import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

import TcgoService from '@/services/pctg/Service'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedDecks: [
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png',
        id: 'werwweww233s1',
        title: 'PikaChooChoo1',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY123.png',
        id: 'werwweww233s2',
        title: 'PikaChooChoo2',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY122.png',
        id: 'werwweww233s3',
        title: 'PikaChooChoo3',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY121.png',
        id: 'werwweww233s4',
        title: 'PikaChooChoo4',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY120.png',
        id: 'werwweww233s5',
        title: 'PikaChooChoo5',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY119.png',
        id: 'werwweww233s6',
        title: 'PikaChooChoo6',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY118.png',
        id: 'werwweww233s7',
        title: 'PikaChooChoo7',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY117.png',
        id: 'werwweww233s8',
        title: 'PikaChooChoo8',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY183.png',
        id: 'dfeewafsdsad9',
        title: 'Mewtwo EX',
        description: 'Adding something funny and witty here would be nice.',
        date: new Date()
      }
    ],
    loadedCards: [
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png',
        id: 'werwweww233s1',
        title: 'PikaChooChoo1',
        date: '2017-07-12'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY123.png',
        id: 'werwweww233s2',
        title: 'PikaChooChoo2',
        date: '2017-07-14'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY122.png',
        id: 'werwweww233s3',
        title: 'PikaChooChoo3',
        date: '2017-07-13'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY121.png',
        id: 'werwweww233s4',
        title: 'PikaChooChoo4',
        date: '2017-07-15'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY120.png',
        id: 'werwweww233s5',
        title: 'PikaChooChoo5',
        date: '2017-07-15'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY119.png',
        id: 'werwweww233s6',
        title: 'PikaChooChoo6',
        date: '2017-07-14'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY118.png',
        id: 'werwweww233s7',
        title: 'PikaChooChoo7',
        date: '2017-07-15'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY117.png',
        id: 'werwweww233s8',
        title: 'PikaChooChoo8',
        date: '2017-07-16'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY183.png',
        id: 'dfeewafsdsad9',
        title: 'Mewtwo EX',
        date: '2017-07-18'
      }
    ],
    loadedSets: [{
      code: 'sm6',
      expandedLegal: true,
      logoUrl: 'https://images.pokemontcg.io/sm6/logo.png',
      name: 'Forbidden Light',
      ptcgoCode: 'FLI',
      releaseDate: '05/04/2018',
      series: 'Sun & Moon',
      standardLegal: false,
      symbolUrl: 'https://images.pokemontcg.io/sm6/symbol.png',
      totalCards: 131,
      updatedAt: '05/04/2018 20:10:00'
    }],
    loadedTypes: [],
    loadedSubtypes: [],
    loadedSupertypes: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createDeck (state, payload) {
      state.loadedDecks.push(payload)
    },
    createSets (state, payload) {
      state.loadedSets = []
      for (const set of payload) {
        state.loadedSets.push(set)
      }
    },
    createSubtypes (state, payload) {
      for (const subtypes of payload) {
        state.loadedSubtypes.push(subtypes)
      }
    },
    createSupertypes (state, payload) {
      for (const supertypes of payload) {
        state.loadedSupertypes.push(supertypes)
      }
    },
    createTypes (state, payload) {
      for (const types of payload) {
        state.loadedTypes.push(types)
      }
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    signUpUser ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            // TODO: Need to better understand why firebase object format is different than video example.
            user = firebase.auth().currentUser
            const newUser = {
              id: user.uid,
              favoriteDecks: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signInUser ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              favoriteDecks: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    createDeck ({commit}, payload) {
      const deck = {
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'adfasdfasd'
      }
      // Reach out to firebase and store it.
      commit('createDeck', deck)
    },
    createSets ({commit}, payload) {
      TcgoService.getSets().then(function (response) {
        commit('createSets', response.data.sets)
      })
    },
    createSubtypes ({commit}, payload) {
      TcgoService.getSubtypes().then(function (response) {
        commit('createSubtypes', response.data.subtypes)
      })
    },
    createSupertypes ({commit}, payload) {
      TcgoService.getSupertypes().then(function (response) {
        commit('createSupertypes', response.data.supertypes)
      })
    },
    createTypes ({commit}, payload) {
      TcgoService.getTypes().then(function (response) {
        commit('createTypes', response.data.types)
      })
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedCards (state) {
      return state.loadedCards.sort((cardA, cardB) => {
        return cardA.date > cardB.date
      })
    },
    loadedDecks (state) {
      return state.loadedDecks.sort((deckA, deckB) => {
        return deckA.date > deckB.date
      })
    },
    featuredDecks (state, getters) {
      return getters.loadedDecks.slice(0, 10)
    },
    loadedDeck (state) {
      return (deckId) => {
        return state.loadedDecks.find((deck) => {
          return deck.id === deckId
        })
      }
    },
    loadedSets (state) {
      return state.loadedSets.sort((setA, setB) => {
        return new Date(setB.releaseDate) - new Date(setA.releaseDate)
      })
    },
    featuredSets (state, getters) {
      return getters.loadedSets.slice(0, 10)
    },
    loadedSet (state) {
      return (setCode) => {
        return state.loadedSets.find((set) => {
          return set.code === setCode
        })
      }
    },
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
})
