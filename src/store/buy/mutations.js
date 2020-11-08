import { setLoadingStatus } from '@/utils/storeMixin'

export { setLoadingStatus }

export function setCurrentAccountToBuy (state, payload) {
  state.currentAccountToBuy = payload
}

export function setEmail (state, payload) {
  state.email = payload
}
