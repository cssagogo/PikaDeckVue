<template>
  <v-form @submit.prevent="pushFilters" class="pa-2">
    Energy Types
    <v-select
      multiple
      class="white"
      v-model="types"
      :options="$store.state.loadedTypes"
    ></v-select>

    Card Types
    <v-select
      multiple
      class="white"
      v-model="supertype"
      :options="$store.state.loadedSupertypes"
    ></v-select>

    Attributes
    <v-select
      multiple
      class="white"
      v-model="subtype"
      :options="$store.state.loadedSubtypes"
    ></v-select>

    Expansions
    <v-select
      multiple
      class="white"
      label="name"
      v-model="set"
      :options="$store.state.loadedSets"
    ></v-select>

    <v-layout row>
      <v-flex xs12>
        <v-btn class="primary ml-0"
               type="submit">Apply</v-btn>
      </v-flex>
    </v-layout>

  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        types: [],
        subtype: [],
        supertype: [],
        set: []
      }
    },
    methods: {
      getSetNames (sets) {
        return sets.map(obj => {
          return obj.name
        })
      },
      toParamString (paramArray) {
        return (paramArray) ? paramArray.join('|') : null
      },
      getParams () {
        return {
          types: this.toParamString(this.types),
          subtype: this.toParamString(this.subtype),
          supertype: this.toParamString(this.supertype),
          set: this.toParamString(this.getSetNames(this.set))
        }
      },
      pushFilters () {
        this.$emit('apply', this.getParams())
      }
    }
  }
</script>