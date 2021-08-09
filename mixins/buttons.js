import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['chipName']),
    buttonClass() {
      return {
        'btn--black': this.chipName !== 'movistar',
        'btn--movistar': this.chipName === 'movistar',
      }
    },
    benefitClass() {
      return {
        'offer__benefit--movistar': this.chipName === 'movistar',
      }
    },
  },
}
