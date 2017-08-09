<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Signup' }">Signup</router-link>
    <router-link :to="{ name: 'Songs' }">Songs</router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
</style>
