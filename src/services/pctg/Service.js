import PctgApi from '@/services/pctg/Api'

export default {
  getSets () {
    return PctgApi().get('/sets')
  },
  getSubtypes () {
    return PctgApi().get('/subtypes')
  },
  getSupertypes () {
    return PctgApi().get('/supertypes')
  },
  getTypes () {
    return PctgApi().get('/types')
  }
}
