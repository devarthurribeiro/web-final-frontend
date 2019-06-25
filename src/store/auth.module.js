import ApiService from "@/services/api.service"
import JwtService from "@/services/jwt.service"

export default {
  state: {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
  },
  getters: {
    currentUser(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.isAuthenticated
    }
  },
  mutations: {
    setAuth(state, user) {
      state.isAuthenticated = true
      state.user = user
      state.errors = {}
      JwtService.saveToken(state.user.token)
      ApiService.setHeader()
    }
  },
  actions: {
    async login(context, credentials) {
      try {
        const {
          data
        } = await ApiService.post("auth/signin", credentials)
        context.commit('setAuth', data)
      } catch (error) {
        alert(error)
      }

    }
  }
}