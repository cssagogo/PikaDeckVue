<template>
  <v-layout row>
    <v-flex x12>

      <v-card class="elevation-0 blue-grey">
        <v-card-text>

          <v-layout row>
            <v-flex xs7 v-if="card.supertype" class="headline white--text">
              {{ card.supertype }}<span v-if="card.subtype">-{{ card.subtype }}</span>
            </v-flex>
            <v-flex xs5 v-if="card.hp" class="white--text headline text-xs-right">
              <small>HP</small>{{ card.hp }}
              <app-energy-icon
                v-if="card.types"
                v-for="(energy, index) in card.types"
                :key="`card-type-${index}`"
                :type="energy"></app-energy-icon>
            </v-flex>
          </v-layout>

          <v-layout row v-if="card.evolvesFrom">
            <v-flex xs12 class="white--text">
              Evolves from: {{ card.evolvesFrom }}
            </v-flex>
          </v-layout>

        </v-card-text>
      </v-card>

      <v-layout row wrap v-if="card.text">
        <v-flex xs12
                v-for="(text, index) in card.text"
                :key="`card-text-${index}`"
                class="my-2">
          {{ text }}
        </v-flex>
      </v-layout>

      <v-layout row v-if="card.ability">
        <v-flex xs12 class="my-2">
          <div class="green--text">{{ card.ability.type }}</div>
          <div class="title">{{ card.ability.name }}</div>
          {{ card.ability.text }}
        </v-flex>
      </v-layout>

      <v-layout row wrap v-if="card.attacks">
        <v-flex xs12
                v-for="(attack, index) in card.attacks"
                :key="`attack-${index}`"
                class="my-2">

          <v-layout row wrap>
            <v-flex v-if="attack.name" xs8 class="title">
              <app-energy-icon
                v-if="attack.cost"
                v-for="(energy, index) in attack.cost"
                :key="`attack-cost-${index}`"
                :type="energy"></app-energy-icon>
              {{ attack.name }}
            </v-flex>
            <v-flex v-if="attack.damage" xs4 class="title text-xs-right">
              {{ attack.damage }}
            </v-flex>
          </v-layout>

          {{ attack.text }}

        </v-flex>
      </v-layout>

      <v-card v-if="card.weaknesses || card.resistances || card.retreatCost"
              class="my-3 elevation-0 blue-grey lighten-5">
        <v-card-text>
          <v-layout row>
            <v-flex xs4>
              <div class="title">Weaknesses</div>
              <span v-if="card.weaknesses"
                    v-for="(weakness, index) in card.weaknesses"
                    :key="`weakness-${index}`">
                 <app-energy-icon
                  :type="weakness.type"></app-energy-icon>
                {{ weakness.value }}
              </span>
            </v-flex>
            <v-flex xs4>
              <div class="title">Resistances</div>
              <span v-if="card.resistances"
                    v-for="(resistance, index) in card.resistances"
                    :key="`resistance-${index}`">
                 <app-energy-icon
                   :type="resistance.type"></app-energy-icon>
                {{ resistance.value }}
              </span>
            </v-flex>
            <v-flex xs4>
              <div class="title">Retreat Cost</div>
              <span v-if="card.retreatCost"
                    v-for="(energy, index) in card.retreatCost"
                    :key="`retreat-${index}`">
                 <app-energy-icon
                   :type="energy"></app-energy-icon>
              </span>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>

      <v-layout row class="my-3">
        <v-flex xs8>
          <div class="title">
            <img :src="set.symbolUrl" height="20px"> {{ card.set }}
          </div>
          <div>
            {{ card.series }}
            | Set Code: {{ card.setCode }}
            | PTCGO Code: {{ set.ptcgoCode }}
          </div>
          <div>
            Released: {{ set.releaseDate }}
            | Tournament Type: <span v-if="set">{{ tournamentType }}</span>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="title text-xs-right">
            {{ card.number }} / {{ set.totalCards }}
          </div>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-layout row class="my-3">
        <v-flex xs6>
          Artist:
          {{ card.artist }}
        </v-flex>
        <v-flex xs6
          class="text-xs-right"
          v-if="card.nationalPokedexNumber">
          National Pokedex:
          {{ card.nationalPokedexNumber }}
        </v-flex>
      </v-layout>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['card'],
    computed: {
      set () {
        return this.$store.getters.loadedSet(this.card.setCode)
      },
      tournamentType () {
        return (this.set.standardLegal) ? 'Standard' : (this.set.expandedLegal) ? 'Expanded' : 'Unlimited'
      }
    }
  }
</script>