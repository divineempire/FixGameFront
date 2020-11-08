export function loadPacks ({ commit }) {
  return this.$productsApi.getProducts()
    .then(res => {
      commit('setPacks', res)
    })
}
