import Vue from 'vue'
import Vuex from 'vuex'

import user from './components/modules/user/store'
import settings from './components/modules/settings/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    settings
  }
})
