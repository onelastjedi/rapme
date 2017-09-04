<template>
  <div :class="$style.user">
    <template v-if="!author"><Loader /></template>
    <template v-else>
      <h1>{{ author.nickname }}</h1>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  computed: {
    author () {
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
