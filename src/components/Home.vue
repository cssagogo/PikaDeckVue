<template>
  <v-container fluid>


    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn
          large
          router
          to="/decks"
          class="accent">Explore Decks</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn
          large
          router
          to="/deck/new"
          class="accent">Create Deck</v-btn>
      </v-flex>
    </v-layout>


    <v-layout row wrap>
      <v-flex xs12>





        <carousel
          :scrollPerPage="true"
          :paginationSize="20"
          :perPageCustom="[[768, 3], [1024, 4]]"
          :navigationEnabled="true">
          <slide v-for="deck in decks" :key="deck.id">

              <v-card class="ma-2" hover="true">
                <v-card-media
                  class="secondary pa-2"
                  :src="deck.imageUrl"
                  height="300px" contain>
                </v-card-media>
                <v-card-title primary-title>

                  <div>
                    <h3 class="headline mb-0">PikaChooChoooo</h3>
                    <div>Some description goes here</div>
                  </div>

                </v-card-title>

              </v-card>

          </slide>
        </carousel>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
        decks: [
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s', title: 'PikaChooChoo'},
          { imageUrl: 'https://images.pokemontcg.io/xyp/XY183.png', id: 'dfeewafsdsad', title: 'Mewtwo EX'}
        ],
      }
    }
  }
</script>

<style scoped>

</style>