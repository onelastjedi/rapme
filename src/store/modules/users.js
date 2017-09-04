import jwtDecode from 'jwt-decode'
import apolloClient from '@/api/apolloClient'
import signinUser from '@/api/mutations/signinUser.graphql'
import userById from '@/api/queries/user.graphql'

const state = {
  error: null,
  current: null,
  authors: []
}

const getters = {
  authorById: (state, getters) => (id) => {
    return state.authors.find(o => o.id === id)
  }
}

const mutations = {
  checkAuth () {
    const token = window.localStorage.getItem('graphcoolToken')
    if (token) state.current = jwtDecode(token)
  },
  signinUser (state, token) {
    state.current = jwtDecode(token)
    state.error = null
  },
  logoutUser () {
    state.current = null
    window.localStorage.removeItem('graphcoolToken')
  },
  catchErrors (state, error) {
    state.error = error.message
  },
  clearErrors (state) {
    state.error = null
  },
  setAuthors (state, author) {
    state.authors.push(author)
  }
}

const actions = {
  signinUser ({ commit }, { email, password }) {
    if (email && password) {
      apolloClient.mutate({
        mutation: signinUser,
        variables: { email, password }
      }).then((res) => {
        const token = res.data.signinUser.token
        window.localStorage.setItem('graphcoolToken', token)
        commit('signinUser', token)
      }).catch(error => commit('catchErrors', error))
    }
  },
  getUserById ({ commit }, { id }) {
    apolloClient.query({
      query: userById,
      variables: { id }
    }).then((res) => {
      commit('setAuthors', res.data.User)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
