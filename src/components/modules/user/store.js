const state = {
  user: null,
  logged: false
}

const getters = {
}

const mutations = {
  onSignIn (state, payload) {
    state.logged = true
    state.user = {
      name: 'Santiago',
      roleId: 1
    }
    var history = payload.router.history
    if (history.pending) return payload.router.push(history.pending.fullPath)

    return payload.router.push('/')
  }
}

const actions = {
  doSignIn ({ commit }, payload) {
    setTimeout(() => {
      commit('onSignIn', payload)
    }, 1000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
