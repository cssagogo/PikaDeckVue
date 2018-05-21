<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="https://images.pokemontcg.io/xyp/XY124.png"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h3 class="white--text mb-0">Deck Title Here</h3>
                    <div>Deck description goes here</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    flat
                    to="/decks/1">
                    <v-icon left light>arrow_forward</v-icon>
                    View Deck
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
