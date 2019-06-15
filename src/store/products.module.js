import {
  ProductsService
} from '@/services/api.service'

export default {
  state: {
    list: []
  },
  mutations: {
    setProducts(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async fetchProducts(context) {
      const {
        data
      } = await ProductsService.query()
      context.commit('setProducts', data)
    }
  }
}