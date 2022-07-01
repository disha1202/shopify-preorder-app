import { MutationTree } from 'vuex'
import OrderState from './orderState'
import * as types from './mutation-types'

const mutations: MutationTree <OrderState> = {
  [types.DRAFT_ORDER_UPDATED] (state, payload) {
    state.draftOrder = payload;
  },
  [types.DRAFT_ORDER_ROUTE_PARAMS_UPDATED] (state, payload) {
    state.routeParams = payload;
  }
}
export default mutations;