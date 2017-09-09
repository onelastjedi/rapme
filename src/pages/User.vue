<template>
  <div :class="$style.user">
    <template v-if="!user"><Loader /></template>
    <template v-else>
      <h1>{{ user.nickname }}</h1>
      <div v-for="s in user.songs">
        <router-link :key="s.id" :to="{ name: 'Song', params: { id: s.id }}">{{ s.title }}</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  computed: {
    user () {
      return this.$store.getters.authorById(this.$route.params.id)
    }
  },
  mounted () {
    this.$store.dispatch('getUserById', { id: this.$route.params.id })
  },
  components: {
    Loader
  }
}
</script>

<style module lang="stylus">
</style>
