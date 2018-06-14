<template>
  <v-form @submit.prevent="pushFilters" class="pa-2">

    <v-layout row wrap class="my-2">
      <v-flex xs12>
        <label class="subheading">Energy Types</label>
        <v-select
          multiple
          class="white"
          v-model="types"
          :options="$store.state.loadedTypes"
        ></v-select>
      </v-flex>
    </v-layout>


    <v-layout row wrap class="my-2">
      <v-flex xs12>
        <label class="subheading">Card Types</label>
        <v-select
          multiple
          class="white"
          v-model="supertype"
          :options="$store.state.loadedSupertypes"
        ></v-select>
      </v-flex>
    </v-layout>


    <v-layout row wrap class="my-2">
      <v-flex xs12>
        <label class="subheading">Attributes</label>
        <v-select
          multiple
          class="white"
          v-model="subtype"
          :options="$store.state.loadedSubtypes"
        ></v-select>
      </v-flex>
    </v-layout>


    <v-layout row wrap class="my-2">
      <v-flex xs12>
        <label class="subheading">Expansions</label>
        <v-select
          multiple
          class="white"
          label="name"
          v-model="set"
          :options="$store.state.loadedSets"
        ></v-select>
        <a href="#" @click.stop.prevent="addStandardSets" class="accent--text">
          Add Standard Expansions
        </a>
      </v-flex>
    </v-layout>



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
      },
      addStandardSets () {
        let sets = this.$store.getters.loadedSets.filter(item => item.standardLegal)
        this.set = sets
      }
    }
  }
</script>