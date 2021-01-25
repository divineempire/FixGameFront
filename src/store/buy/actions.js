export function checkAvailability (ctx, payload) {
  return this.$productsApi.checkAvailability(payload)
    .then(res => {
      return res.available
    })
}

export function tryToBuy ({dispatch, state}) {
  return dispatch('checkAvailability', state.currentAccountToBuy.id)
    .then(res => {
      if (res) {
        return dispatch('buyProducts')
      } else {
        throw new Error('not available')
      }
    })
}

export function buyProducts ({state}) {
  return this.$productsApi.buyProducts({
    email: state.email,
    products: [
      {
        productId: state.currentAccountToBuy.id,
        amount: 1
      }
    ]
  })
}


export function checkLastPurchases(ctx, payload) {
    return this.$productsApi.checkLastPurchases(payload)
}
