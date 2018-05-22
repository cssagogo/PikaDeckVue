<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3
              v-for="deck in decks"
              :key="deck.id">

        <v-card
          hover
          :to="'/decks/' + deck.id">
          <v-card-media
            class="secondary darken-4 pa-1">

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
  </v-container>
</template>

<script>
  export default {
    computed: {
      decks () {
        return this.$store.getters.loadedDecks
      }
    }
  }
</script>
