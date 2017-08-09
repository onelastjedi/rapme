<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Songs' }">Songs</router-link>
    <!-- <router-link :to="{ name: 'Login' }">Login</router-link> -->
    <!-- <router-link :to="{ name: 'Signup' }">Signup</router-link> -->
    <router-link :to="{ name: 'Add Song' }">Add Song</router-link>
    <template v-if="currentUser">
      <router-link :to="{ name: 'Home' }" @click.native="logout">Logout</router-link>
    </template>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    currentUser: state => state.user.current,
  }),
  methods: {
    logout() {
      this.$store.commit('logoutUser')
    },
  },
}
</script>

<style>
</style>
