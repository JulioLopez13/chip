import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['chipName']),
    gradientBg() {
      return {
        'bgChip--at-t': this.chipName === 'at&t',
        'bgChip--movistar': this.chipName === 'movistar',
        'bgChip--unefon': this.chipName === 'unefon',
      }
    },
  },
}
