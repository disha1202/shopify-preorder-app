import { MutationTree } from 'vuex'
import OrderState from './orderState'
import * as types from './mutation-types'

const mutations: MutationTree <OrderState> = {
  [types.DRAFT_ORDER_UPDATED] (state, payload) {
    state.draftOrder = payload;
  }
}
export default mutations;