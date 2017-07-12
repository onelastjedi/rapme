const state = {
  current: null,
}

const mutations = {
  authUser(_, { email, password }) {
    if (email && password) state.current = true
  },
}

export default {
  state,
  mutations,
}
