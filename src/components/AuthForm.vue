<template>
  <div class="auth-form">
    <form @submit.prevent="signin({ email, password })">
      <p>
        <label id="email">Email:</label>
        <input type="text" name="email" v-model="email" />
      </p>
      <p>
        <label id="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </p>
      <template v-if="email && password">
        <button type="submit">Submit</button>
      </template>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    signin() {
      this.$store.dispatch({
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
