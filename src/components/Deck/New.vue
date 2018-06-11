<template>
  <layout-build-deck>
    <v-container>

          <v-toolbar
            color="primary"
            dark
            fixed
            app
            clipped-right
          >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-text-field
              flat
              solo-inverted
              prepend-icon="search"
              label="Search"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn flat icon @click.stop="right = !right">
              <v-icon>filter_list</v-icon>
            </v-btn>
          </v-toolbar>

          <v-navigation-drawer
            fixed
            v-model="drawer"
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

            </form>

          </v-navigation-drawer>

          <v-content>
            <v-container fluid fill-height>
              <v-layout justify-center align-center>
                <v-flex shrink>
                  <v-tooltip right>
                    <span>Source</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-container>
          </v-content>

          <v-navigation-drawer
            right
            temporary
            v-model="right"
            fixed
          >
            <v-toolbar color="white">
              <v-btn flat icon @click.stop="right = !right">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Filter</v-toolbar-title>
            </v-toolbar>

          </v-navigation-drawer>

    </v-container>
  </layout-build-deck>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        drawerRight: true,
        right: null,
        left: null,
        title: '',
        imageUrl: '',
        description: ''
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
      }
    }
  }
</script>