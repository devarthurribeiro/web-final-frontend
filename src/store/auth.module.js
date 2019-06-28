import ApiService from "@/services/api.service"
import JwtService from "@/services/jwt.service"
import Swal from 'sweetalert2'

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
  actions: {
    async login(context, credentials) {
      try {
        const {
          data
        } = await ApiService.post("auth/signin", credentials)
        context.commit('setAuth', data)
      } catch (error) {
        alert(error)
        Swal.fire('Login ou senha inválido', error, 'error')
      }
    },
    async logout(context) {
      context.commit('purgeAuth')
    }
  },
  mutations: {
    setAuth(state, user) {
      state.isAuthenticated = true
      state.user = user
      state.errors = {}
      JwtService.saveToken(state.user.token)
      ApiService.setHeader()
    },
    purgeAuth(state) {
      state.isAuthenticated = false;
      state.user = {};
      state.errors = {};
      JwtService.destroyToken();
    }
  }
}