<template>
  <v-layout row wrap v-if="cards">
    <v-flex xs12>

      <v-layout row wrap>
        <v-flex xs6 sm4 md3 lg2 xl2
                v-for="(card, index) in cards"
                :key="card.id">
          <v-card>
            <v-card-media
              class="pa-1">
              <v-layout row>
                <v-flex x12 class="text-xs-center">
                  <img v-lazy="card.imageUrl"
                       @click="openCardDialog(index)"
                       style="height:auto;width:100%;display: block">
                </v-flex>
              </v-layout>
            </v-card-media>
            <v-card-actions>
              <v-btn small color="primary" @click="addCard(card)">
                Add
              </v-btn>
              <v-spacer></v-spacer>
              <v-menu :nudge-width="150" bottom left>
                <v-btn small slot="activator" icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <app-print-cards
                    v-if="card"
                    :play-set="card"
                    display-as="list"></app-print-cards>
                  <v-list-tile @click="openCardDialog(index)">
                    <v-list-tile-title>
                      <v-icon left>info</v-icon> Details
                    </v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="openCardZoomDialog(index)">
                    <v-list-tile-title>
                      <v-icon left>zoom_in</v-icon> Zoom
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-dialog v-model="cardDialog" v-if="cardDialog" scrollable max-width="800">
        <v-card>
          <v-card-title class="headline">
            <span>{{ cardData.name }}</span>
            <v-spacer></v-spacer>
            <v-btn icon  @click="cardDialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <app-card-info v-if="cardData" :card="cardData"></app-card-info>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!--<v-btn color="green darken-1" flat="flat" @click="cardDialog = false">Disagree</v-btn>-->
            <v-btn color="green darken-1" flat="flat" @click="cardDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="cardZoomDialog" v-if="cardZoomDialog" scrollable max-width="800">
        <v-card>
          <v-card-title class="headline">
            <span>{{ cardData.name }}</span>
            <v-spacer></v-spacer>
            <v-btn icon  @click="cardZoomDialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <img v-lazy="cardData.imageUrlHiRes" style="width: 100%; height: auto">
          </v-card-text>
        </v-card>
      </v-dialog>

    </v-flex>
  </v-layout>
</template>

<script>
  import TcgoService from '@/services/pctg/Service'

  export default {
    props: ['params'],
    data: () => ({
      cardIndex: false,
      cardDialog: false,
      cardZoomDialog: false,
      chartDataReady: false,
      cards: []
    }),
    computed: {
      cardData () {
        return this.cards[this.cardIndex]
      },
      defaultParams () {
        let sets = this.$store.getters.loadedSets.slice(0, 10)
        return {
          subtype: this.toParamString(['GX']),
          set: this.toParamString(this.getSetNames(sets))
        }
      }
    },
    methods: {
      getSetNames (sets) {
        return sets.map(obj => {
          return obj.name
        })
      },
      toParamString (paramArray) {
        return (paramArray) ? paramArray.join('|') : ''
      },
      openCardDialog (index) {
        this.cardIndex = index
        this.cardDialog = true
      },
      openCardZoomDialog (index) {
        this.cardIndex = index
        this.cardZoomDialog = true
      },
      getCards () {
        let isParams = Object.values(this.params).filter(item => item).length !== 0
        TcgoService
          .getCards({
            params: (isParams) ? this.params : this.defaultParams
          })
          .then(
            response => {
              this.cards = response.data.cards
            }
          )
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      addCard (card) {
        this.$emit('addCard', card)
      }
    },
    mounted () {
      this.getCards()
    },
    watch: {
      params: function (newVal, oldVal) {
        this.getCards()
      }
    }
  }
</script>