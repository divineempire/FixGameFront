export function loadPacks ({ commit }) {
  commit('setLoadingStatus', true)
  return this.$productsApi.getProducts()
    .then(res => {
      commit('setPacks', res)
      setTimeout(() => {
        commit('setLoadingStatus', false)
      }, 2000)
    })
}
