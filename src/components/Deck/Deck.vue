<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4>My Deck</h4>
          </v-card-title>
          <v-card-media
            src="https://images.pokemontcg.io/xyp/XY124.png"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">17th July, 2017 - Creator</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis commodi corporis
              debitis dicta est illum, iusto labore laboriosam, laudantium magni minima natus nostrum omnis
              perspiciatis, qui quibusdam ullam voluptatem!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="accent">Favorite</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>