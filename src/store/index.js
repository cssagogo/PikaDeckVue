import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedDecks: [
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png',
        id: 'werwweww233s1',
        title: 'PikaChooChoo1',
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-12'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY123.png',
        id: 'werwweww233s2',
        title: 'PikaChooChoo2',
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-14'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY122.png',
        id: 'werwweww233s3',
        title: 'PikaChooChoo3',
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-13'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY121.png',
        id: 'werwweww233s4',
        title: 'PikaChooChoo4',
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-15'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY120.png',
        id: 'werwweww233s5',
        title: 'PikaChooChoo5',
        description: 'Adding something funny and witty here would be nice.',
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
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-15'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY117.png',
        id: 'werwweww233s8',
        title: 'PikaChooChoo8',
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-16'
      },
      {
        imageUrl: 'https://images.pokemontcg.io/xyp/XY183.png',
        id: 'dfeewafsdsad9',
        title: 'Mewtwo EX',
        description: 'Adding something funny and witty here would be nice.',
        date: '2017-07-18'
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
    loadedSets: [
      {'code': 'xyp', 'ptcgoCode': 'PR-XY', 'name': 'XY Black Star Promos', 'series': 'XY', 'totalCards': 183, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '10/12/2013', 'symbolUrl': 'https://images.pokemontcg.io/xyp/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/xyp/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'xy8', 'ptcgoCode': 'BKT', 'name': 'BREAKthrough', 'series': 'XY', 'totalCards': 162, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '11/04/2015', 'symbolUrl': 'https://images.pokemontcg.io/xy8/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/xy8/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'xy9', 'ptcgoCode': 'BKP', 'name': 'BREAKpoint', 'series': 'XY', 'totalCards': 122, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '02/03/2016', 'symbolUrl': 'https://images.pokemontcg.io/xy9/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/xy9/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'g1', 'ptcgoCode': 'GEN', 'name': 'Generations', 'series': 'XY', 'totalCards': 115, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '02/22/2016', 'symbolUrl': 'https://images.pokemontcg.io/g1/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/g1/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'xy10', 'ptcgoCode': 'FCO', 'name': 'Fates Collide', 'series': 'XY', 'totalCards': 124, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '05/02/2016', 'symbolUrl': 'https://images.pokemontcg.io/xy10/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/xy10/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'xy11', 'ptcgoCode': 'STS', 'name': 'Steam Siege', 'series': 'XY', 'totalCards': 114, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '08/03/2016', 'symbolUrl': 'https://images.pokemontcg.io/xy11/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/xy11/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'xy12', 'ptcgoCode': 'EVO', 'name': 'Evolutions', 'series': 'XY', 'totalCards': 108, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '11/02/2016', 'symbolUrl': 'https://images.pokemontcg.io/xy12/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/xy12/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'sm1', 'ptcgoCode': 'SUM', 'name': 'Sun & Moon', 'series': 'Sun & Moon', 'totalCards': 149, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '02/03/2017', 'symbolUrl': 'https://images.pokemontcg.io/sm1/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/sm1/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'smp', 'ptcgoCode': 'PR-SM', 'name': 'SM Black Star Promos', 'series': 'Sun & Moon', 'totalCards': 15, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '02/03/2017', 'symbolUrl': 'https://images.pokemontcg.io/smp/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/smp/logo.png', 'updatedAt': '05/04/2018 20:10:00'},
      {'code': 'sm2', 'ptcgoCode': 'GRI', 'name': 'Guardians Rising', 'series': 'Sun & Moon', 'totalCards': 145, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '05/05/2017', 'symbolUrl': 'https://images.pokemontcg.io/sm2/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/sm2/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'sm3', 'ptcgoCode': 'BUS', 'name': 'Burning Shadows', 'series': 'Sun & Moon', 'totalCards': 147, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '08/05/2017', 'symbolUrl': 'https://images.pokemontcg.io/sm3/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/sm3/logo.png', 'updatedAt': '04/06/2018 20:46:00'},
      {'code': 'sm35', 'ptcgoCode': 'SLG', 'name': 'Shining Legends', 'series': 'Sun & Moon', 'totalCards': 72, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '10/06/2017', 'symbolUrl': 'https://images.pokemontcg.io/sm35/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/sm35/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'sm4', 'ptcgoCode': 'CIN', 'name': 'Crimson Invasion', 'series': 'Sun & Moon', 'totalCards': 111, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '11/03/2017', 'symbolUrl': 'https://images.pokemontcg.io/sm4/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/sm4/logo.png', 'updatedAt': '03/04/2018 10:35:00'},
      {'code': 'sm5', 'ptcgoCode': 'UPR', 'name': 'Ultra Prism', 'series': 'Sun & Moon', 'totalCards': 156, 'standardLegal': true, 'expandedLegal': true, 'releaseDate': '02/02/2018', 'symbolUrl': 'https://images.pokemontcg.io/sm5/symbol.png', 'logoUrl': 'https://images.pokemontcg.io/sm5/logo.png', 'updatedAt': '03/04/2018 10:35:00'}
    ]
  },
  mutations: {
    createDeck (state, payload) {
      state.loadedDecks.push(payload)
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
        return setA.releaseDate > setB.releaseDate
      })
    },
    featuredSets (state, getters) {
      return getters.loadedSets.slice(0, 10)
    },
    loadedSet (state) {
      return (code) => {
        return state.loadedDecks.find((set) => {
          return set.code === code
        })
      }
    }
  }
})
