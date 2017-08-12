/* eslint-disable */
import jwtDecode from 'jwt-decode'
import apolloClient from '@/api/apolloClient'
import mutation from '@/api/mutations/signinUser.graphql'

const state = {
  error: null,
  current: null,
}

const mutations = {
  checkAuth() {
    const token = window.localStorage.getItem('graphcoolToken')
    if (token) state.current = jwtDecode(token)
  },
  signinUser(_, token) {
    state.current = jwtDecode(token)
    state.error = null
  },
  logoutUser() {
    state.current = null
    window.localStorage.removeItem('graphcoolToken')
  },
  catchErrors(_, error) {
    state.error = error.message
  },
  clearErrors() {
    state.error = null
  },
}

const actions = {
  signinUser({ commit }, { email, password }) {
    if (email && password) {
      apolloClient.mutate({
        mutation,
        variables: { email, password },
      }).then((res) => {
        const token = res.data.signinUser.token
        window.localStorage.setItem('graphcoolToken', token)
        commit('signinUser', token)
        // eslint-disable-next-line
      }).catch(error => commit('catchErrors', error))
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
