import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './auth.module'
import user from './user.module'
import products from './products.module'

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    user,
    products,
  }
})