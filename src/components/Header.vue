<template>
<header class="header">
  <nav class="header-inner">
    <router-link :to="{ name: 'Home' }" class="header-inner-logo">R</router-link>
    <router-link :to="{ name: 'Add Song' }" class="nav-link">Add</router-link>
    <template v-if="currentUser">
      <router-link :to="{ name: 'Home' }" @click.native="logout" class="nav-link">Logout</router-link>
    </template>
    <template v-else>
      <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
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

<style lang="stylus">
.header
  background-color #24292e
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  border-bottom 1px solid #000

  &-inner
    max-width 800px
    margin 0 auto
    box-sizing border-box
    padding 17px 47px

    &-logo
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

    .nav-link
      display inline-block
      color rgba(255, 255, 255, .75)
      margin-right 15px
      line-height 1.3
      font-weight 700
      text-decoration none

      &:hover
        color white

      &:last-child
        margin-right 0
        float right

</style>
