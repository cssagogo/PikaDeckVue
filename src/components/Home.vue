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
          :perPageCustom="[[768, 2], [1024, 3]]">
          <slide
            v-for="deck in decks"
            :key="deck.id"
            class="py-4">

              <v-card
                class="mx-2"
                hover
                :to="'/decks/' + deck.id">
                <v-card-media
                  class="accent darken-2 pa-2"
                  height="300px">

                  <v-layout row>
                    <v-flex x12 class="text-xs-center">
                      <img :src="deck.imageUrl"
                           style="height:100%;width:auto">
                    </v-flex>
                  </v-layout>


                </v-card-media>
                <v-card-title primary-title>

                  <div>
                    <h3 class="headline mb-0">{{ deck.title }}</h3>
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
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s1', title: 'PikaChooChoo1'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s2', title: 'PikaChooChoo2'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s3', title: 'PikaChooChoo3'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s4', title: 'PikaChooChoo4'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s5', title: 'PikaChooChoo5'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s6', title: 'PikaChooChoo6'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s7', title: 'PikaChooChoo7'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY124.png', id: 'werwweww233s8', title: 'PikaChooChoo8'},
          {imageUrl: 'https://images.pokemontcg.io/xyp/XY183.png', id: 'dfeewafsdsad9', title: 'Mewtwo EX'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>