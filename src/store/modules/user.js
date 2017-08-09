import apolloClient from '@/api/apolloClient'
import mutation from '@/api/mutations/signinUser.graphql'

const state = {
  current: window.localStorage.getItem('graphcoolToken'),
}

const mutations = {
  signinUser(_, jwt) {
    state.current = jwt
  },
  logoutUser() {
    state.current = null
    window.localStorage.removeItem('graphcoolToken')
  },
}

const actions = {
  authUser({ commit }, { email, password }) {
    if (email && password) {
      apolloClient.mutate({
        mutation,
        variables: { email, password },
      }).then((res) => {
        const jwt = res.data.signinUser.token
        window.localStorage.setItem('graphcoolToken', jwt)
        commit('signinUser', jwt)
        // eslint-disable-next-line
      }).catch(error => console.error(error))
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
