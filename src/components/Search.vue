<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12>

        <v-form @submit.prevent="getCards">

              <div class="white" style="border: 1px solid rgba(60,60,60,.26);border-radius: 4px;">
                <input v-model="name" class="white" type="text" value="" placeholder="Search">
              </div>


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
                 type="submit">Search</v-btn>
            </v-flex>
          </v-layout>

        </v-form>

        <app-card-list v-if="cards" :cards="cards"></app-card-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import TcgoService from '@/services/pctg/Service'

  export default {
    data () {
      return {
        name: '',
        types: '',
        subtype: '',
        supertype: '',
        set: '',
        cards: []
      }
    },
    methods: {
      getSetNames (sets) {
        return sets
      },
      toParamString (paramArray) {
        return (paramArray) ? paramArray.join('|') : ''
      },
      getParams () {
        return {
          name: this.name,
          types: this.toParamString(this.types),
          subtype: this.toParamString(this.subtype),
          supertype: this.toParamString(this.supertype),
          set: this.getSetNames(this.set)
        }
      },
      getCards () {
        TcgoService
          .getCards({
            params: this.getParams()
          })
          .then(
            response => {
              this.cards = response.data.cards
            }
          )
          .catch(
            error => {
              console.log(error)
            }
          )
      }
    }
  }
</script>