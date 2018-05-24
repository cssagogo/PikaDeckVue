<template>
  <v-container grid-list-md fluid>

    <v-layout row wrap>
      <v-flex xs12>
        <h1>{{ deck.title }}</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm12 md8 lg9>

        <v-layout row wrap>
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
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ card.title }}</h3>
                  <div>Some description goes here</div>
                </div>
              </v-card-title>
            </v-card>

          </v-flex>
        </v-layout>

      </v-flex>
      <v-flex xs12 sm12 md4 lg3>

        <v-card>
          <v-card-media
            :src="deck.imageUrl"
            height="300px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">{{ deck.date }} - Creator</div>
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
    props: ['id'],
    computed: {
      deck () {
        return this.$store.getters.loadedDeck(this.id)
      },
      cards () {
        return this.$store.getters.loadedCards
      }
    }
  }
</script>