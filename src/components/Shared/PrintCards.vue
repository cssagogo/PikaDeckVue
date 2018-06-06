<template>
  <span class="mr-0">

    <v-list-tile v-if="displayAs === 'list'" @click="printCards">
      <v-list-tile-title>
        <v-icon left>print</v-icon> Print
      </v-list-tile-title>
    </v-list-tile>

    <v-btn v-else icon @click="printCards">
      <v-icon>print</v-icon>
    </v-btn>

    <v-dialog
      v-model="printDialog"
      v-if="printDialog && cards.length > 1"
      scrollable
      persistent
      max-width="300">
      <v-card>
        <v-card-title class="headline">
          <span>Generating PDF</span>
          <v-spacer></v-spacer>
          <v-btn icon  @click="printDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>

          <v-layout row wrap>
            <v-flex xs12 class="text-xs-center" v-if="!lastPrintedCard">
              Getting Images Now
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-if="lastPrintedCard">
              {{ lastPrintedCard.name }} Added
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-progress-circular
                v-if="cards.length > 1"
                :size="cards.length"
                :width="15"
                :rotate="360"
                :value="base64store.length"
                color="cyan">
                {{ base64store.length }}
              </v-progress-circular>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              {{ base64store.length }} of {{ cards.length }}
            </v-flex>

          </v-layout>

        </v-card-text>
      </v-card>
    </v-dialog>

  </span>
</template>

<script>
  import JsPdf from 'jsPDF'

  export default {
    props: ['displayAs', 'playSet', 'cardList'],
    data: () => ({
      printDialog: false,
      base64store: [],
      pdfConfig: {
        pageWidth: 8.5,
        pageHeight: 11,
        cardHeight: 3.46,
        cardWidth: 2.48,
        gutter: 0.01
      }
    }),
    computed: {
      cards () {
        if (this.playSet) {
          return [this.playSet]
        }
        if (this.cardList) {
          return this.cardList
        }
        return []
      },
      lastPrintedCard () {
        return this.base64store.slice(-1)[0]
      }
    },
    methods: {
      printCards () {
        this.printDialog = true
        for (let card of this.cards) {
          this.imgToBase64(card, this)
        }
      },
      imgToBase64 (card, scope) {
        let xhr = new XMLHttpRequest()
        xhr.onload = () => {
          let reader = new FileReader()
          reader.onloadend = () => {
            scope.storeDataUrl(card, reader.result)
          }
          reader.readAsDataURL(xhr.response)
        }
        xhr.open('GET', card.imageUrlHiRes)
        xhr.responseType = 'blob'
        xhr.send()
      },
      storeDataUrl (card, dataUrl) {
        this.base64store.push({
          name: card.name,
          id: card.id,
          dataUrl: dataUrl
        })
        if (this.cards.length === this.base64store.length) {
          if (this.playSet) {
            this.printPlaySet(this.base64store[0])
          }
          if (this.cardList) {
            this.printCardList(this.base64store)
          }
          this.printDialog = false
          this.base64store = []
        }
      },
      printPlaySet (data) {
        let cfg = this.pdfConfig
        let dataUrl = data[0].dataUrl

        let row1 = (cfg.pageHeight - (cfg.cardHeight * 2) - cfg.gutter) / 2
        let row2 = row1 + cfg.cardHeight + cfg.gutter
        let col1 = (cfg.pageWidth - (cfg.cardWidth * 2) - cfg.gutter) / 2
        let col2 = col1 + cfg.cardWidth + cfg.gutter

        let doc = new JsPdf({
          orientation: 'portrait',
          unit: 'in',
          format: [cfg.pageHeight, cfg.pageWidth]
        })

        doc.addImage(dataUrl, 'PNG', col1, row1, cfg.cardWidth, cfg.cardHeight)
        doc.addImage(dataUrl, 'PNG', col2, row1, cfg.cardWidth, cfg.cardHeight)
        doc.addImage(dataUrl, 'PNG', col1, row2, cfg.cardWidth, cfg.cardHeight)
        doc.addImage(dataUrl, 'PNG', col2, row2, cfg.cardWidth, cfg.cardHeight)

        // TODO: Generate title based off of pokemon name
        doc.save('PikaDeck.pdf')
      },
      printCardList (data) {
        let cfg = this.pdfConfig

        let row1 = (cfg.pageHeight - (cfg.cardHeight * 3) - (cfg.gutter * 2)) / 2
        let row2 = row1 + cfg.cardHeight + cfg.gutter
        let row3 = row2 + cfg.cardHeight + cfg.gutter

        let col1 = (cfg.pageWidth - (cfg.cardWidth * 3) - (cfg.gutter * 2)) / 2
        let col2 = col1 + cfg.cardWidth + cfg.gutter
        let col3 = col2 + cfg.cardWidth + cfg.gutter

        let place = {
          row1: row1,
          row2: row2,
          row3: row3,
          col1: col1,
          col2: col2,
          col3: col3
        }

        let doc = new JsPdf({
          orientation: 'portrait',
          unit: 'in',
          format: [cfg.pageHeight, cfg.pageWidth]
        })

        var colCount = 1
        var rowCount = 1

        for (let card of data) {
          let col = place['col' + colCount]
          let row = place['row' + rowCount]

          doc.addImage(card.dataUrl, 'PNG', col, row, cfg.cardWidth, cfg.cardHeight)

          if (colCount <= 2) {
            colCount++
            continue
          }

          colCount = 1

          if (rowCount <= 2) {
            rowCount++
            continue
          }

          rowCount = 1
          doc.addPage()
        }

        doc.save('PikaDeck.pdf')
      }
    }
  }
</script>