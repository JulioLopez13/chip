export const state = () => ({
  chipName: 'at&t',
})

export const mutations = {
  changeChip(state, payload) {
    state.chipName = payload
  },
}

export const getters = {
  chipName(state) {
    return state.chipName
  },
}
