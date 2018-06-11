<template>
  <layout-build-deck>
    <v-container>

    <v-layout row>
      <v-flex x12 sm6 offset-sm3>
        <h1>Start a New Deck</h1>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex x12>
        <form @submit.prevent="onCreateDeck">

          <v-layout row>
            <v-flex x12 sm6 offset-sm3>
              <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex x12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image Url"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex x12 sm6 offset-sm3>
              <img :src="imageUrl" width="200">
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex x12 sm6 offset-sm3>
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
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary"
                     :disabled="!formIsValid"
                     type="submit">Create Deck</v-btn>
            </v-flex>
          </v-layout>

        </form>
      </v-flex>
    </v-layout>

  </v-container>
  </layout-build-deck>
</template>

<script>
  export default {
    data () {
      return {
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