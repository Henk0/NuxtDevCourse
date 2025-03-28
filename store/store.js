import Vue from 'vue'
import Vuex from 'vuex'
import msgModule from './modules/msgModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    msgModule
  }
})
