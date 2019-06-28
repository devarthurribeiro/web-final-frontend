import {
  ProductsService,
  CategoryService
} from '@/services/api.service'

export default {
  state: {
    list: [],
    categories: []
  },
  mutations: {
    setProducts(state, payload) {
      state.list = payload
    },
    removeProduct(state, id) {
      state.list = state.list.filter(p => p.id !== id)
    },
    setCategories(state, payload) {
      state.categories = payload
    }
  },
  actions: {
    async fetchProducts(context) {
      const {
        data
      } = await ProductsService.query()
      context.commit('setProducts', data)
    },
    async fetchCategories(context) {
      const {
        data
      } = await CategoryService.query()
      context.commit('setCategories', data)
    },
    async remove(context, payload) {
      const {
        data
      } = await ProductsService.delete(payload)
      context.commit('removeProduct', payload)
    }
  }
}