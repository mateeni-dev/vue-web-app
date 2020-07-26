import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'https://reqres.in/api/login',
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  },
  getters: {},
  mutations: {},
  actions: {}
})
