import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import songs from './modules/songs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    songs,
  },
})
