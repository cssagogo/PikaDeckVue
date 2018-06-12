<template>
  <layout-build-deck>
    <v-container grid-list-sm fluid>

      <v-toolbar
        color="primary"
        dark
        fixed
        app
        clipped-right
      >
        <v-toolbar-side-icon @click.stop="deckDrawer = !deckDrawer"></v-toolbar-side-icon>
        <v-text-field
          v-model="filters.name"
          @keyup.enter="onSearchInput"
          flat
          solo-inverted
          prepend-icon="search"
          label="Search"
          ref="search"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn flat icon @click.stop="filterDrawer = !filterDrawer">
          <v-icon>filter_list</v-icon>
        </v-btn>
      </v-toolbar>


      <v-navigation-drawer
        fixed
        v-model="deckDrawer"
        app
      >

        <v-toolbar color="primary" dark>
          <v-btn flat icon to="/">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>New Deck</v-toolbar-title>
        </v-toolbar>

        <form @submit.prevent="onCreateDeck" class="pa-2">

          <v-layout row>
            <v-flex x12>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex x12>
              <v-text-field
                name="imageUrl"
                label="Image Url"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex x12>
              <img :src="imageUrl" width="200">
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex x12>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-btn class="primary"
                     :disabled="!formIsValid"
                     type="submit">Create Deck</v-btn>
            </v-flex>
          </v-layout>

          <v-layout row wrap v-for="(card, index) in cards" :key="`card-added-${index}`">
            <v-flex xs12>{{ card.name }}</v-flex>
          </v-layout>



        </form>

      </v-navigation-drawer>

      <app-card-list :params="filters" @addCard="addCard"></app-card-list>

      <v-navigation-drawer
        right
        temporary
        v-model="filterDrawer"
        fixed>
        <v-toolbar color="white">
          <v-btn flat icon @click.stop="filterDrawer = !filterDrawer">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Filter</v-toolbar-title>
        </v-toolbar>
        <app-search-filters @apply="onFilterCards"></app-search-filters>

      </v-navigation-drawer>

    </v-container>
  </layout-build-deck>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        deckDrawer: true,
        filterDrawer: null,
        title: '',
        imageUrl: '',
        description: '',
        filters: {},
        cards: []
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      }
    },
    methods: {
      onSearchInput () {
        this.filters = {
          ...this.filters
        }
      },
      onFilterCards (params) {
        this.filterDrawer = false
        this.filters = {
          ...this.filters,
          ...params
        }
      },
      onCreateDeck () {
        if (!this.formIsValid) {
          return
        }
        const deckData = {
          title: this.title,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createDeck', deckData)
        this.$router.push('/decks')
      },
      addCard (card) {
        this.cards.push(card)
      },
    },
    mounted () {
      this.$nextTick(() => this.$refs.search.focus())
    }
  }
</script>