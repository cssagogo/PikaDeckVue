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
          :perPageCustom="[[768, 3], [1024, 4], [1200, 5]]">
          <slide
            v-for="deck in decks"
            :key="deck.id"
            class="pa-2">

            <v-card
              hover
              :to="'/decks/' + deck.id">
              <v-card-media
                class="secondary darken-4 pt-1 text-xs-center">

                <v-layout row>
                  <v-flex x12 class="text-xs-center">
                    <img :src="deck.imageUrl"
                         style="max-height:300px;height:100%;width:auto;">
                  </v-flex>
                </v-layout>


              </v-card-media>

              <v-card-actions>
                <div>
                  <h3 class="mb-0">{{ deck.title }}</h3>
                  <div>By John Smith | {{ deck.date | date }}</div>
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

          </slide>
        </carousel>


      </v-flex>
    </v-layout>





    <v-layout row wrap>
      <v-flex xs12>

        <carousel
          :scrollPerPage="true"
          :paginationSize="20"
          :perPageCustom="[[768, 3], [1024, 4], [1200, 4]]">

          <slide
            v-for="set in sets"
            :key="set.code"
            class="pa-2">

            <v-card
              hover
              :to="'/decks/' + set.code">
              <v-card-title primary-title class="text-xs-center">

                <v-layout row>
                  <v-flex x12 class="text-xs-center">
                    <img :src="set.logoUrl"
                         style="max-height:60px;max-width:100%;">
                    <div>{{ set.name }}</div>
                  </v-flex>
                </v-layout>

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
    computed: {
      decks () {
        return this.$store.getters.featuredDecks
      },
      sets () {
        return this.$store.getters.featuredSets
      }
    }
  }
</script>

<style scoped>

</style>