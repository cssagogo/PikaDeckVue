import Vue from 'vue'
import Vuex from 'vuex'

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
    user: {
      id: 'adsfadfasd',
      favoriteDecks: ['dfeewafsdsad9']
    },
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
    loadedSupertypes: []
  },
  mutations: {
    createDeck (state, payload) {
      state.loadedDecks.push(payload)
    },
    createSets (state, payload) {
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
    }
  },
  actions: {
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
    }
  }
})
