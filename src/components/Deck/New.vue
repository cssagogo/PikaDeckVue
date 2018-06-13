<template>
  <layout-build-deck>

    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="deckDrawer">

      <form @submit.prevent="onCreateDeck" class="pa-2">

        <v-layout row>
          <v-flex x12>
            <v-text-field
              required
              hide-details
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
              rows="2"
              hide-details
              name="description"
              label="Description"
              id="description"
              multi-line
              v-model="description"
              required></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex x12>
            <v-text-field
              hide-details
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
          <v-flex xs12>
            <v-btn class="primary ma-0"
                   :disabled="!formIsValid"
                   type="submit">Create Deck</v-btn>
          </v-flex>
        </v-layout>

        <div class="title mt-4">Cards in Deck:</div>
        <div v-if="cards.length > 0">
          <v-layout row wrap v-for="(card, index) in cards" :key="`card-added-${index}`">
            <v-flex xs12>{{ card.name }}</v-flex>
          </v-layout>
        </div>
        <div v-else>No cards have been added.</div>



      </form>

    </v-navigation-drawer>

    <v-toolbar
      color="primary"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed>

      <v-toolbar-title style="width:300px" class="ml-0 pl-0">
        <v-toolbar-side-icon to="/">
          <v-icon>arrow_back</v-icon>
        </v-toolbar-side-icon>
        <span>New Deck</span>
      </v-toolbar-title>


      <v-toolbar-side-icon
        @click.stop="deckDrawer = !deckDrawer">
      </v-toolbar-side-icon>
      <v-text-field
        v-model="filters.name"
        @keyup.enter="onSearchInput"
        clearable
        autofocus
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        ref="search">
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn flat icon
        @click.stop="filterDrawer = !filterDrawer">
        <v-icon>filter_list</v-icon>
      </v-btn>
    </v-toolbar>


    <v-content>
      <v-container grid-list-lg fluid fill-height>
        <app-card-list
          :params="filters"
          @addCard="addCard"></app-card-list>
      </v-container>
    </v-content>


    <v-navigation-drawer
      right
      temporary
      v-model="filterDrawer"
      fixed>

      <v-toolbar color="white">
        <v-btn flat icon
           @click.stop="filterDrawer = !filterDrawer">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Filter</v-toolbar-title>
      </v-toolbar>

      <app-search-filters
        @apply="onFilterCards"></app-search-filters>

    </v-navigation-drawer>


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
        // TODO: If not energy and if more than 4 of card name exist, alert user.
        // TODO: If 60 cards, alert user on add.
        // TODO: If card not standard, alert user on first non standard add.
        this.cards.push(card)
      }
    }
  }
</script>