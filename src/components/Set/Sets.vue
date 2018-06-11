<template>
  <layout-basic>
    <v-container grid-list-xl fluid>
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

        <v-data-iterator
          v-if="sets"
          :items="sets"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          content-tag="v-layout"
          row
          wrap>
          <v-flex
            slot="item"
            slot-scope="props"
            xs12
            sm6
            md4
            lg3>
            <app-set-card :set="props.item"></app-set-card>
          </v-flex>
        </v-data-iterator>

      </v-flex>
    </v-layout>
  </v-container>
  </layout-basic>
</template>

<script>
  export default {
    data: () => ({
      rowsPerPageItems: [12, 24, 48, {'text': 'All', 'value': -1}],
      pagination: {
        rowsPerPage: 12
      }
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      sets () {
        return this.$store.getters.loadedSets
      }
    }
  }
</script>


