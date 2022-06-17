import { createStore } from 'vuex'

export default createStore({
  state: {
    like: 2,
    isAuth: true,
  },
  getters: {
    doubleLikes(state){
      return state.like * 2
    }
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
