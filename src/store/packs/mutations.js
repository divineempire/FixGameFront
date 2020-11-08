import { setLoadingStatus } from '@/utils/storeMixin'

export { setLoadingStatus }

export function setPacks (state, payload) {
  state.packs = payload
}
