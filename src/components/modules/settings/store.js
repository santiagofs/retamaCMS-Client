import {AuthHTTP} from './../../../shared/Http'
const state = {
  modules: null
}

const mutations = {
  setSettings (state, payload) {
    state.modules = payload
  }
}

const actions = {
  getSettings ({ commit }) {
    const stored = localStorage.getItem('settings')
    if (stored) {
      commit('setSettings', stored)
    } else {
      AuthHTTP.get('settings', function (rsp) {
        console.log(rsp)
      }, function (rsp) {
        console.log(rsp)
      })
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
