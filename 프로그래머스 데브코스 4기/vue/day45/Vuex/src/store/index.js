import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      msg: 'Hello Vue!?',
      count: 1,
    }
  },
  getters: {
    reversedMsg(state) {
      return state.msg.split('').reverse().join('')
    },
  },
  mutations: {
    increaseCount(state) {
      // 첫번째 매개변수로 state를 받을 수 있다.
      state.count += 1
    },
    updateMsg(state, newMsg) {
      state.msg = newMsg
    },
  },
  actions: {
    //context => state, getters, commit, dispatch
    async fetchTodo({ commit }) {
      const todo = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      ).then((res) => res.json())
      commit('updateMsg', todo.title)
    },
  },
})
