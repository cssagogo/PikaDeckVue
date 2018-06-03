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
                <span v-if="card.types" v-for="energy in card.types">{{ energy }}</span>
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
        <v-flex xs12 v-for="text in card.text" class="my-2">
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
        <v-flex xs12 v-for="attack in card.attacks" class="my-2">

          <v-layout row wrap>
            <v-flex v-if="attack.name" xs8 class="title">
              <span v-if="attack.cost" v-for="energy in attack.cost">{{ energy }}</span>
              {{ attack.name }}
            </v-flex>
            <v-flex v-if="attack.damage" xs4 class="title text-xs-right">
              {{ attack.damage }}
            </v-flex>
          </v-layout>

          {{ attack.text }}

        </v-flex>
      </v-layout>



      {{ card }}
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['card'],
    methods: {
    }
  }
</script>