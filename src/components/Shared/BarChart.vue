<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    props: {
      'options': Object,
      'chartData': [Array, Object],
      'chartLabel': String,
      dark: Boolean
    },
    data () {
      return {
        baseData: {},
        baseOptions: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false
        },
        baseBackgroundColor: [
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)'
        ],
        baseBorderColor: 'rgba(0, 0, 0, 1)',
        darkOptions: {
          scales: {
            yAxes: [{
              ticks: {
                fontColor: '#fff',
                beginAtZero: true
              },
              gridLines: {
                zeroLineColor: 'rgba(255, 255, 255, 0.5)',
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: '#fff',
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }]
          }
        },
        darkBackgroundColor: [
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)'
        ],
        darkBorderColor: 'rgba(255, 255, 255, 1)'
      }
    },
    computed: {
      finalOptions () {
        let options = Object.assign({}, this.baseOptions, this.options)
        if (this.dark) {
          options = Object.assign({}, options, this.darkOptions)
        }
        return options
      },
      finalData () {
        let formatted = this.baseData
        if (this.chartData && this.chartData.constructor === Array) {
          let newLabels = []
          let newData = []
          for (let item of this.chartData) {
            newLabels.push(item.name)
            newData.push(item.value)
          }
          formatted = {
            labels: newLabels,
            datasets: [{
              label: this.chartLabel || 'Count',
              data: newData,
              backgroundColor: (this.dark) ? this.darkBackgroundColor : this.baseBackgroundColor,
              borderColor: (this.dark) ? this.darkBorderColor : this.baseBorderColor,
              borderWidth: 1
            }]
          }
        }
        return formatted
      }
    },
    mounted () {
      this.renderChart(this.finalData, this.finalOptions)
    }
  }
</script>
