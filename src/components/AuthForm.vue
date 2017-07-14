<template>
  <form @submit.prevent="signin({ email, password })">
    <p>
      <label>Email:</label>
      <input type="text" v-model="email" />
    </p>
    <p>
      <label>Password:</label>
      <input type="password" v-model="password" />
    </p>
    <template v-if="email && password">
      <button type="submit">Submit</button>
    </template>
  </form>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    signin() {
      this.$store.commit({
        type: 'authUser',
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style>
</style>
