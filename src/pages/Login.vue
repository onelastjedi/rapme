<template>
  <div class="login-page">
    <h1>Login</h1>
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
      if (this.currentUser) this.$router.push('/')
    },
  },
  beforeMount() {
    if (this.currentUser) this.$router.push('/')
  },
}
</script>

<style>
</style>
