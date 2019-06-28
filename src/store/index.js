import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

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
  },
  plugins: [new VuexPersistence().plugin]
})