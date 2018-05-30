<template>
  <v-container grid-list-md fluid>

    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :width="7"
          :size="70"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!loading">
      <v-flex x12>

        <v-toolbar class="transparent elevation-0">
          <v-toolbar-title class="ml-0">
            {{ set.name }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
          <v-menu bottom left class="mr-0">
            <v-btn slot="activator" icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>

        <v-layout row wrap>
          <v-flex xs12 sm12 md8 lg8>

            <v-layout row wrap v-if="loading">
              <v-flex xs12 sm6 md4 lg3
                      v-for="card in cards"
                      :key="card.id">

                <v-card>
                  <v-card-media
                    class="pa-1">
                    <v-layout row>
                      <v-flex x12 class="text-xs-center">
                        <img :src="card.imageUrl"
                             style="height:auto;width:100%;display: block">
                      </v-flex>
                    </v-layout>
                  </v-card-media>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-menu bottom left>
                      <v-btn slot="activator" icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                      <v-list>
                        <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                          <v-list-tile-title>
                            <v-icon left>favorite</v-icon> {{ item.title }}
                          </v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </v-card-actions>

                </v-card>

              </v-flex>
            </v-layout>

          </v-flex>
          <v-flex xs12 sm12 md4 lg4>
            <v-card>
              <v-card-media
                class="px-3 py-2">
                <v-layout row>
                  <v-flex x12 class="text-xs-center set-logo">
                    <img :src="set.logoUrl"
                         class="set-logo__image">
                  </v-flex>
                </v-layout>
              </v-card-media>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12 class="text-xs-center">
                    <h3 class="mb-0">
                      <img :src="set.symbolUrl" height="20px">
                      {{ set.name }}
                    </h3>
                    <div>{{ set.series }} Series released on {{ set.releaseDate | date }}</div>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex x12>

                    <div>
                      <strong>HP:</strong> {{ stats.hp }}
                    </div>

                  </v-flex>
                </v-layout>

                <bar-chart></bar-chart>

                <template>
                  <v-tabs
                    color="grey lighten-2"
                    show-arrows>
                    <v-tabs-slider  color="primary"></v-tabs-slider>

                    <v-tab href="#tab-types">
                      Types
                    </v-tab>
                    <v-tab href="#tab-weaknesses">
                      Weaknesses
                    </v-tab>
                    <v-tab href="#tab-resistances">
                      Resistances
                    </v-tab>
                    <v-tab href="#tab-subtypes">
                      Subtypes
                    </v-tab>
                    <v-tab href="#tab-rarity">
                      Rarity
                    </v-tab>
                    <!--<v-tab href="#tab-set">-->
                    <!--Set-->
                    <!--</v-tab>-->
                    <!--<v-tab href="#tab-series">-->
                    <!--Series-->
                    <!--</v-tab>-->

                    <v-tabs-items>
                      <v-tab-item id="tab-types">
                        <v-list dense>
                          <v-list-tile v-for="(item, i) in arrayOfObjects(stats.types)" :key="i">
                            <v-list-tile-content>
                              {{ item.name }}
                            </v-list-tile-content>
                            <v-list-tile-action>
                              {{ item.value }}
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-tab-item>
                      <v-tab-item id="tab-weaknesses">
                        <v-list dense>
                          <v-list-tile v-for="(item, i) in arrayOfObjects(stats.weaknesses)" :key="i">
                            <v-list-tile-content>
                              {{ item.name }}
                            </v-list-tile-content>
                            <v-list-tile-action>
                              {{ item.value }}
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-tab-item>
                      <v-tab-item id="tab-resistances">
                        <v-list dense>
                          <v-list-tile v-for="(item, i) in arrayOfObjects(stats.resistances)" :key="i">
                            <v-list-tile-content>
                              {{ item.name }}
                            </v-list-tile-content>
                            <v-list-tile-action>
                              {{ item.value }}
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-tab-item>
                      <v-tab-item id="tab-subtypes">
                        <v-list dense>
                          <v-list-tile v-for="(item, i) in arrayOfObjects(stats.subtype)" :key="i">
                            <v-list-tile-content>
                              {{ item.name }}
                            </v-list-tile-content>
                            <v-list-tile-action>
                              {{ item.value }}
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-tab-item>
                      <v-tab-item id="tab-rarity">
                        <v-list dense>
                          <v-list-tile v-for="(item, i) in arrayOfObjects(stats.rarity)" :key="i">
                            <v-list-tile-content>
                              {{ item.name }}
                            </v-list-tile-content>
                            <v-list-tile-action>
                              {{ item.value }}
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-tab-item>
                      <!--<v-tab-item id="tab-set">-->
                      <!--<v-list dense>-->
                      <!--<v-list-tile v-for="(item, i) in arrayOfObjects(stats.set)" :key="i">-->
                      <!--<v-list-tile-content>-->
                      <!--{{ item.name }}-->
                      <!--</v-list-tile-content>-->
                      <!--<v-list-tile-action>-->
                      <!--{{ item.value }}-->
                      <!--</v-list-tile-action>-->
                      <!--</v-list-tile>-->
                      <!--</v-list>-->
                      <!--</v-tab-item>-->
                      <!--<v-tab-item id="tab-series">-->
                      <!--<v-list dense>-->
                      <!--<v-list-tile v-for="(item, i) in arrayOfObjects(stats.series)" :key="i">-->
                      <!--<v-list-tile-content>-->
                      <!--{{ item.name }}-->
                      <!--</v-list-tile-content>-->
                      <!--<v-list-tile-action>-->
                      <!--{{ item.value }}-->
                      <!--</v-list-tile-action>-->
                      <!--</v-list-tile>-->
                      <!--</v-list>-->
                      <!--</v-tab-item>-->
                    </v-tabs-items>

                  </v-tabs>
                </template>

                <v-layout row wrap>
                  <v-flex x12>

                    <div>
                      <strong>Artists:</strong>
                      <ul class="list-comma">
                        <li v-for="(item, key) in arrayOfObjects(stats.artist)">
                          {{ item.name }}
                        </li>
                      </ul>
                    </div>

                <br><br><br>
                {{ stats.supertype }}<br>
              </v-flex>
            </v-layout>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>

  </v-container>
</template>


<script>
  import TcgoService from '@/services/pctg/Service'

  export default {
    props: ['code'],
    data: () => ({
      cards: [],
      items: [
        { title: 'Card Info' },
        { title: 'Print Play Set' }
      ]
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      set () {
        return this.$store.getters.loadedSet(this.code)
      },
      stats () {
        const keys = [
          'hp',
          'artist',
          'series',
          'set',
          'subtype',
          'supertype',
          'rarity',
          'weaknesses',
          'resistances',
          'types'
        ]
        let stats = {}
        for (let card of this.cards) {
          for (let key of keys) {
            stats[key] = stats[key] || {}
            if (card[key]) {
              // Handle simple summing of data
              if (key === 'hp') {
                stats[key] = isNaN(stats[key]) ? 0 : stats[key]
                stats[key] += (card[key] ? parseInt(card[key]) : 0)
                continue
              }
              // Handle where value is array of objects
              if (key === 'weaknesses' || key === 'resistances') {
                for (let item of card[key]) {
                  if (!stats[key][item.type]) {
                    stats[key][item.type] = 0
                  }
                  stats[key][item.type]++
                }
                continue
              }
              // Handle where value is array
              if (key === 'types') {
                for (let item of card[key]) {
                  if (!stats[key][item]) {
                    stats[key][item] = 0
                  }
                  stats[key][item]++
                }
                continue
              }
              // Handle where value is string
              if (!stats[key][card[key]]) {
                stats[key][card[key]] = 0
              }
              stats[key][card[key]]++
            }
          }
        }
        console.log(stats.hp)
        return stats
      }
    },
    methods: {
      orderBy (property) {
        property = property.replace(/\s/g, '')
        let sortNumber = 0
        let sortOrder = 1
        if (property[0] === '-') {
          sortOrder = -1
          property = property.substr(1)
        }
        if (property.indexOf('|number') > -1) {
          sortNumber = 1
          property = property.split('|')[0]
        }
        return function (a, b) {
          let _a = a[property]
          let _b = b[property]
          if (sortNumber) {
            _a = _a ? _a * 1 : 0
            _b = _b ? _b * 1 : 0
          }
          if (property.indexOf('supertype') > -1) {
            _a = _a === 'Pokémon' ? 2 : (_a === 'Trainer' ? 1 : 0)
            _b = _b === 'Pokémon' ? 2 : (_b === 'Trainer' ? 1 : 0)
          }
          const result = (_a < _b) ? -1 : (_a > _b) ? 1 : 0
          return result * sortOrder
        }
      },
      orderByMultiple () {
        const that = this
        const props = arguments
        return function (obj1, obj2) {
          let i = 0
          let result = 0
          const numberOfProperties = props.length
          while (result === 0 && i < numberOfProperties) {
            result = that.orderBy(props[i])(obj1, obj2)
            i++
          }
          return result
        }
      },
      sortCards (cards) {
        // TODO: Sort the cards returned
        return cards.sort(this.orderByMultiple('-hp|number', '-supertype', 'name'))
      },
      getCards () {
        TcgoService
          .getCards({
            params: {
              setCode: this.code,
              pageSize: 500
              // TODO: Page results instead?
            }
          })
          .then(
            response => {
              const cards = this.sortCards(response.data.cards)
              this.cards = cards
            }
          )
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      arrayOfObjects (object) {
        let newArray = []
        for (let key in object) {
          let newObject = {
            name: key,
            value: object[key]
          }
          newArray.push(newObject)
        }
        return newArray.sort(this.orderByMultiple('-value|number'))
      }
    },
    mounted () {
      if (this.code) {
        this.getCards()
      }
    }
  }
</script>

<style lang="scss" scoped>

  .list-comma {
    display: inline;

    li {
      display: inline-block;
      padding: 0;
      margin: 0 0.6rem 0 0;
      position: relative;

      &::after {
        bottom: 0;
        content: ', ';
        position: absolute;
        right: -0.2rem;
       }

      &:last-child {
        &::after {
           content: '';
         }
       }
    }
  }

  .set-logo {
    height: 200px;
    line-height: 200px;

    &__image {
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto !important;
      display: inline-block;
      line-height: 1.5;
      vertical-align: middle;
    }
  }
</style>