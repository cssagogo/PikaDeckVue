<template>
  <v-container grid-list-md fluid>


    <v-toolbar class="transparent elevation-0">
      <v-toolbar-title class="ml-0">
        {{ set.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-menu bottom left class="mr-0">
        <v-btn slot="activator" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in items" :key="i" @click="">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>


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

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-menu bottom left>
                  <v-btn slot="activator" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                      <v-list-tile-title>
                        <v-icon left>favorite</v-icon> {{ item.title }}
                      </v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-card-actions>

            </v-card>

          </v-flex>
        </v-layout>

      </v-flex>
      <v-flex xs12 sm12 md4 lg3>

        <v-card>
          <v-card-media
            class="pa-1">
            <v-layout row>
              <v-flex x12 class="text-xs-center">
                <img :src="set.logoUrl"
                     style="height:auto;width:100%;display: block">
              </v-flex>
            </v-layout>
          </v-card-media>
          <v-card-text>
            <div>{{ set.series }} Series</div>
            <h3 class="mb-0">{{ set.name }}</h3>
            <div>{{ set.releaseDate | date }}</div>
          </v-card-text>
        </v-card>

      </v-flex>
    </v-layout>


  </v-container>
</template>


<script>
  export default {
    props: ['code'],
    computed: {
      set () {
        return this.$store.getters.loadedSet(this.code)
      },
      cards () {
        return this.$store.getters.loadedCards
      }
    },
    data: () => ({
      items: [
        { title: 'Card Info' },
        { title: 'Print Play Set' }
      ]
    })
  }
</script>