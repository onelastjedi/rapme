<template>
  <div class="login-page container">
    <div class="logo">R</div>
    <h1>Sign in to Rapme</h1>
    <AuthForm />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
import { mapState } from 'vuex'

export default {
  components: {
    AuthForm,
  },
  computed: mapState({
    currentUser: state => state.user.current,
  }),
  watch: {
    currentUser() {
      if (this.currentUser) this.$router.push('/add')
    },
  },
  beforeMount() {
    if (this.currentUser) this.$router.push('/add')
  },
}
</script>

<style lang="stylus">
  .login-page
    position relative

    .logo
      font-size 38px
      font-weight 700
      border 3px solid #2c3e50
      text-align center
      width 50px
      margin 30px auto
    h1
      font-size 28px
      font-weight 300
      text-align center
</style>
