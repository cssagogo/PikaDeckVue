<template>
  <v-card
    v-if="set"
    hover
    :to="setPath(set)">
    <v-card-media
      class="px-3 py-2">
      <v-layout row>
        <v-flex x12 class="text-xs-center set-logo">
          <img v-lazy="set.logoUrl"
               class="set-logo__image">
        </v-flex>
      </v-layout>
    </v-card-media>
    <v-card-actions>
      <v-layout xs12>
        <v-flex class="text-xs-center">
          <h3 class="mb-0">
            <img v-lazy="set.symbolUrl" height="20px">
            {{ set.name }}
          </h3>
          <div>{{ set.series }} Series | {{ set.releaseDate | date }}</div>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['set'],
    methods: {
      setPath (set) {
        // TODO: Is doing this as a method best pracice?
        return '/sets/' + set.code + '/' + this.$options.filters.seoTitle(set.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .set-logo {
    height: 150px;
    line-height: 150px;

    .set-logo__image {
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto !important;
      display: inline-block;
      line-height: 1.5;
      vertical-align: middle;
    }
  }
</style>