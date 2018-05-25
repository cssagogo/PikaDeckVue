import PctgApi from '@/services/pctg/Api'

export default {
  getSets () {
    return PctgApi().get('/sets')
  }
}
