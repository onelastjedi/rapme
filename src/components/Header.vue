<template>
<header :class="$style.header">
  <nav :class="$style.header_nav">
    <router-link :to="{ name: 'Home' }" :class="$style.header_nav_logo">R</router-link>
    <router-link :to="{ name: 'Add Song' }" :class="$style.header_nav_link">Add</router-link>
    <template v-if="currentUser">
      <router-link :to="{ name: 'Home' }" @click.native="logout" :class="$style.header_nav_link">Logout</router-link>
    </template>
    <template v-else>
      <router-link :to="{ name: 'Login' }" :class="$style.header_nav_link">Login</router-link>
    </template>
  </nav>
</header>
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

<style module lang="stylus">
.header
  background-color #24292e
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  border-bottom 1px solid #000

  &_nav
    max-width 800px
    margin 0 auto
    box-sizing border-box
    padding 17px 47px
    display grid
    grid-template-columns auto 1fr auto


    &_logo
      box-sizing border-box
      text-align center
      color white
      font-size 15px
      font-weight 700
      text-decoration none
      display inline-block
      border 2px solid white
      margin-right 25px
      width 24px
      height 24px

    &_link
      color rgba(255, 255, 255, .75)
      line-height 1.3
      font-weight 700
      text-decoration none
      transition .2s color ease-out

      &:hover
        color white

</style>
