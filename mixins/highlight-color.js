import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['chipName']),
    highlightColor() {
      let color = ''
      if (this.chipName === 'at&t') color = 'att'
      if (this.chipName === 'movistar') color = 'movistar'
      if (this.chipName === 'unefon') color = 'unefon'

      return {
        color: `var(--${color}-color)`,
        fontFamily: "'Segoe UI Black', sans-serif",
      }
    },
  },
}
