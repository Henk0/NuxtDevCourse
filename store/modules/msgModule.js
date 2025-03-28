const state = () => ({
  msg: 'vuex'
})

const getters = {
  msg (state) {
    return state.msg
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}