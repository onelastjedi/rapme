import apolloClient from '@/api/apolloClient'
import getAllSongs from '@/api/queries/allSongs.graphql'

const state = {
  all: null,
}

const mutations = {
  SET_SONGS(_, songs) {
    state.all = songs
  },
}

const actions = {
  getAllSongs({ commit }) {
    apolloClient.query({
      query: getAllSongs,
      fetchPolicy: 'network-only',
    }).then((res) => {
      commit('SET_SONGS', res.data.allSongs)
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
