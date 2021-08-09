import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['chipName']),
    buttonClass() {
      return {
        'btn--black': this.chipName === 'at&t',
        'btn--movistar': this.chipName === 'movistar',
        'btn--unefon': this.chipName === 'unefon',
      }
    },
    benefitClass() {
      return {
        'offer__benefit--movistar': this.chipName === 'movistar',
      }
    },
  },
}
