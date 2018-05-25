<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3
              v-for="set in sets"
              :key="set.code">

        <v-card
          hover
          :to="'/sets/' + set.code">
          <v-card-media
            class="pa-1">

            <v-layout row>
              <v-flex x12 class="text-xs-center">
                <img :src="set.logoUrl"
                     style="height:auto;width:100%;display: block">
              </v-flex>
            </v-layout>

          </v-card-media>

          <v-card-actions>
            <div>
              <div>{{ set.series }} Series</div>
              <h3 class="mb-0">{{ set.name }}</h3>
              <div>{{ set.releaseDate | date }}</div>
            </div>
          </v-card-actions>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      sets () {
        return this.$store.getters.loadedSets
      }
    }
  }
</script>
