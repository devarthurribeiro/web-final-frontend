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
    }
  }
}