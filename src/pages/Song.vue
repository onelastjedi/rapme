<template>
  <div :class="[$style.song, 'container']">
    <template v-if="!song"><Loader /></template>
    <template v-else>
      <h1>{{ song.title }}</h1>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  computed: {
    song () {
      return this.$store.getters.song(this.$route.params.id)
    }
  },
  mounted () {
    this.$store.dispatch('getSongById', { id: this.$route.params.id })
  },
  components: {
    Loader
  }
}
</script>

<style module lang="stylus">

</style>
