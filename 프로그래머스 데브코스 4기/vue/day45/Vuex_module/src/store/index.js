import { createStore } from 'vuex'
import message from './message'

export default createStore({
  state() {
    return {
      msg: 'Hello Vue!',
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    message: message,
  },
})
