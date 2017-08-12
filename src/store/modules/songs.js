import apolloClient from '@/api/apolloClient'
import allSongs from '@/api/queries/allSongs.graphql'
import createSong from '@/api/mutations/createSong.graphql'
import subscription from '@/api/subscriptions/song.graphql'

const songsObserver = apolloClient.subscribe({
  query: subscription,
})

const state = {
  all: null,
}

let songsSubsObserver

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
      query: allSongs,
      fetchPolicy: 'network-only',
    }).then((res) => {
      commit('SET_SONGS', res.data.allSongs)
    })
  },
  createSong({ commit }, { title, authorId }) {
    apolloClient.mutate({
      mutation: createSong,
      variables: { title, authorId },
    })
  },
  subscribeToSongs({ commit }) {
    songsSubsObserver = songsObserver.subscribe({
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
  unsubscribeFromSongs() {
    if (songsSubsObserver) {
      songsSubsObserver.unsubscribe()
      songsSubsObserver = null
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
