import Proxy from './Proxy'

export default class ProductsProxy extends Proxy {
  constructor (store) {
    super(store, 'api/products')
  }

  getProducts () {
    return this.submit({})
  }

  checkAvailability (id) {
    return this.submit({
      method: 'post',
      data: {
        productId: id
      },
      endpoint: 'availability'
    })
  }

  buyProducts ({coupon = '', username = '', email = '', products = []}) {
    const data = {
      player: {
        username,
        email
      },
      products
    }

    if (coupon) {
      data.coupon = coupon
    }

    return this.submit({
      method: 'post',
      endpoint: 'checkout',
      data
    })
  }

  checkLastPurchases(orderId) {
    return this.submit({
      endpoint: `lastPurchasedValues/${orderId}`
    })
  }
}
