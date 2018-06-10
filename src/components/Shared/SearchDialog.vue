<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="fade-transition">
      <v-btn slot="activator" flat icon @click="setFocus()">
        <v-icon>search</v-icon>
      </v-btn>
      <v-card style="background: rgba(0,0,0,0.9)">
        <v-toolbar dark color="grey darken-3">
          <v-text-field
            ref="search"
            prepend-icon="search"
            class="ml-2"
            id="search"
            name="search-1"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      setFocus () {
        this.$refs.search.focus()
      }
    }
  }
</script>