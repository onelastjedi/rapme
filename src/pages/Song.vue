<template>
  <div :class="[$style.song, 'container']">
    <template v-if="!song"><Loader /></template>
    <template v-else>
      <h1>{{ song.title }}</h1>
      <template v-if="!song.lyrics"><Loader /></template>
      <template v-else>
        <div :class="$style.lyrics">
    			<div :class="$style.lyrics_line" v-for="lyric in song.lyrics" :key="lyric.id">{{lyric.content}}</div>
        </div>
      </template>
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
  .song
    h1
      padding 0 30px

    .lyrics
      padding 30px 32px
      background-color #fafafa
      border-bottom 1px solid #e4e4f4
      border-top 1px solid #e4e4f4
      line-height 1.3

</style>
