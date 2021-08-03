import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['chipName']),
    highlightColor() {
      return {
        color: `var(--${this.chipName === 'at&t' ? 'att' : this.chipName}-color)`,
        fontFamily: "'Segoe UI Black', sans-serif",
      }
    },
  },
}
