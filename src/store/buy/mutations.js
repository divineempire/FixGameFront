import { setLoadingStatus } from '@/utils/storeMixin'

export {setLoadingStatus}

export function setCurrentAccountToBuy(state, payload) {
  state.currentAccountToBuy = payload
}

export function setEmail(state, payload) {
  state.email = payload
}

export function openForm(state) {
  state.openForm = true;
}

export function closeForm(state) {
  state.openForm = false;
}
