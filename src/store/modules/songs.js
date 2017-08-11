import apolloClient from '@/api/apolloClient'
import query from '@/api/queries/allSongs.graphql'
import subscription from '@/api/subscriptions/song.graphql'

const songsObserver = apolloClient.subscribe({
  query: subscription,
})

const state = {
  all: null,
}

const mutations = {
  SET_SONGS(_, songs) {
    state.all = songs
  },
  ADD_SONG(_, song) {
    const songs = state.all.slice()
    songs.push(song)
    state.all = songs
  },
  UPDATE_SONG(_, song) {
    // eslint-disable-next-line
    const songs = state.all.map(o => o.id === song.id ? song : o)
    state.all = songs
  },
  DELETE_SONG(_, song) {
    const songs = state.all.filter(o => o.id !== song.id)
    state.all = songs
  },
}

const actions = {
  getAllSongs({ commit }) {
    apolloClient.query({
      query,
      fetchPolicy: 'network-only',
    }).then((res) => {
      commit('SET_SONGS', res.data.allSongs)
    })
  },
  subscribeToSongs({ commit }) {
    songsObserver.subscribe({
      next(data) {
        switch (data.Song.mutation) {
          case 'CREATED':
            commit('ADD_SONG', data.Song.node)
            break
          case 'UPDATED':
            commit('UPDATE_SONG', data.Song.node)
            break
          case 'DELETED':
            commit('DELETE_SONG', data.Song.previousValues)
            break
          default:
        }
      },
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
