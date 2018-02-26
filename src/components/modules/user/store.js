import {HTTP, AuthHTTP} from './../../../shared/Http'
import jws from 'jws'

const state = {
  user: null,
  logged: false
}

const getters = {
}

const mutations = {
  setUser (state, payload) {
    state.logged = true
    state.user = {
      name: 'Santiago',
      roleId: 1
    }
  }
}

const actions = {
  doSignIn ({ commit }, payload) {
    console.log(payload)

    HTTP.post('login', {
      email: payload.username,
      password: payload.password
    })
      .then(res => {
        var token = jws.decode(res.token);
        token.test = 1;
        localStorage.setItem('token', res.token)
        commit('setUser', {
          name: 'Santiago',
          roleId: 1
        });
        var history = payload.router.history
        if (history.pending) return payload.router.push(history.pending.fullPath)

        return payload.router.push('/')
      })
      .catch(error => console.log(error))
  },
  restoreUser ({commit}, payload) {
    const token = localStorage.getItem('token');
    if (!token) return

    commit('setUser', {
      name: 'Santiago',
      roleId: 1
    });
    return true;
  },
  getX ({commit}, payload) {
    AuthHTTP.post()
  }
}


// login ({commit, dispatch}, authData) {
//   axios.post('/verifyPassword?key=AIzaSyCXlVPPWknVGhfc60mt7Jkv0Xzrho7_mwc', {
//     email: authData.email,
//     password: authData.password,
//     returnSecureToken: true
//   })
//     .then(res => {
//       console.log(res)
//       const now = new Date()
//       const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
//       localStorage.setItem('token', res.data.idToken)
//       localStorage.setItem('userId', res.data.localId)
//       localStorage.setItem('expirationDate', expirationDate)
//       commit('authUser', {
//         token: res.data.idToken,
//         userId: res.data.localId
//       })
//       dispatch('setLogoutTimer', res.data.expiresIn)
//     })
//     .catch(error => console.log(error))
// },

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
