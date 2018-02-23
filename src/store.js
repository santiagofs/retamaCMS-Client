import Vue from 'vue'
import Vuex from 'vuex'

import user from './components/modules/user/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
