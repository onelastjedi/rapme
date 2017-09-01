import apolloClient from '@/api/apolloClient'
import allSongs from '@/api/queries/allSongs.graphql'
import songById from '@/api/queries/song.graphql'
import createSong from '@/api/mutations/createSong.graphql'
import subscription from '@/api/subscriptions/song.graphql'

const songsObserver = apolloClient.subscribe({
  query: subscription
})

let songsSubsObserver

const state = {
  all: []
}

const getters = {
  song: (state, getters) => (songId) => {
    return state.all.find(o => o.id === songId)
  }
}

const mutations = {
  SET_SONGS (state, songs) {
    state.all = songs
  },
  ADD_SONG (state, song) {
    const songs = state.all.slice()
    songs.push(song)
    state.all = songs
  },
  UPDATE_SONG (state, song) {
    const songs = state.all.map(o => o.id === song.id ? song : o)
    if (!songs.length) songs.push(song)
    state.all = songs
  },
  DELETE_SONG (state, song) {
    const songs = state.all.filter(o => o.id !== song.id)
    state.all = songs
  },
  RESET_SONGS () {
    state.all = []
  }
}

const actions = {
  getAllSongs ({ commit }) {
    apolloClient.query({
      query: allSongs,
      fetchPolicy: 'network-only'
    }).then((res) => {
      commit('SET_SONGS', res.data.allSongs)
    })
  },
  createSong ({ commit }, { title, authorId }) {
    apolloClient.mutate({
      mutation: createSong,
      variables: { title, authorId }
    })
  },
  getSongById ({ commit }, { id }) {
    apolloClient.query({
      query: songById,
      variables: { id }
    }).then((res) => {
      commit('UPDATE_SONG', res.data.Song)
    })
  },
  subscribeToSongs ({ commit }) {
    songsSubsObserver = songsObserver.subscribe({
      next (data) {
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
      }
    })
  },
  unsubscribeFromSongs () {
    if (songsSubsObserver) {
      songsSubsObserver.unsubscribe()
      songsSubsObserver = null
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
