import { createStore } from 'vuex'

export default createStore({
  state: {
    like: 2,
    isAuth: false,
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
