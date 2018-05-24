<template>
  <v-container grid-list-xl fluid>
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

          <v-card-actions>
            <div>
              <h3 class="mb-0">{{ deck.title }}</h3>
              <div>By John Smith</div>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>

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
