import {
  UserService
} from '@/services/api.service'

export default {
  state: {
    profile: {}
  },
  mutations: {
    setProfile(state, payload) {
      state.list = payload
    }
  },
  actions: {
    fetchProfile() {}
  }
}