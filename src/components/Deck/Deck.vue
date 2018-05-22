<template>
  <v-container grid-list-md fluid>

    <v-layout row wrap>
      <v-flex xs12>
        <h1> Boom Town</h1>
      </v-flex>
    </v-layout>


    <v-layout row wrap>
      <v-flex xs12 sm12 md8 lg9>

        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3
            v-for="deck in decks"
            :key="deck.id">

            <v-card
              hover
              :to="'/decks/' + deck.id">
              <v-card-media
                class="pa-1">

                <v-layout row>
                  <v-flex x12 class="text-xs-center">
                    <img :src="deck.imageUrl"
                         style="height:auto;width:100%;display: block">
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

          </v-flex>
        </v-layout>

      </v-flex>
      <v-flex xs12 sm12 md4 lg3>

        <v-card>
          <v-card-title>
            <h4>My Deck</h4>
          </v-card-title>
          <v-card-media
            src="https://images.pokemontcg.io/xyp/XY124.png"
            height="300px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">17th July, 2017 - Creator</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis commodi corporis
              debitis dicta est illum, iusto labore laboriosam, laudantium magni minima natus nostrum omnis
              perspiciatis, qui quibusdam ullam voluptatem!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="accent">Favorite</v-btn>
          </v-card-actions>
        </v-card>

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