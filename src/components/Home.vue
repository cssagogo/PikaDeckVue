<template>
  <layout-basic>

    <v-container grid-list-xs fluid>

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
                  class="pt-1 text-xs-center card-media--background">
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
            :perPageCustom="[[768, 3], [1024, 3], [1200, 3]]">
            <slide
              v-for="set in sets"
              :key="set.code"
              class="pa-2">
              <app-set-card :set="set"></app-set-card>
            </slide>
          </carousel>
        </v-flex>
      </v-layout>

    </v-container>

  </layout-basic>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      decks () {
        return this.$store.getters.featuredDecks
      },
      sets () {
        return this.$store.getters.featuredSets
      }
    },
    methods: {
      setPath (set) {
        // TODO: Is doing this as a method best pracice?
        // TODO: This is used on Sets page as well. How do I avoid duplication?
        return '/sets/' + set.code + '/' + this.$options.filters.seoTitle(set.name)
      }
    }
  }
</script>

<style>
  .card-media--background {
    background-image: url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png');
    background-repeat: repeat;
  }
</style>
