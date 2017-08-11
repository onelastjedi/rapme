<template>
  <div class="songs-page container">
    <template v-if="!songs">
      Loading...
    </template>
    <template v-else>
      <ul class="songs-list">
        <li class="songs-list-item" v-for="s in songs">
          <span class="score">{{s.score}}</span>
          <router-link :key="s.id" :to="{name: 'Song', params: {id: s.id}}">{{s.title}}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    songs() {
      return this.$store.state.songs.all
    },
  },
  mounted() {
    this.$store.dispatch('getAllSongs')
  },
}
</script>

<style lang="stylus">
.songs-list
  &-item
    position relative
    background-color #fff
    padding 20px 30px 20px 80px
    border-bottom 1px solid #eee
    position relative
    line-height 20px

    .score
      color #000
      font-size 1.1em
      font-weight 700
      position absolute
      top 50%
      left 0
      width 80px
      text-align center
      margin-top -10px

</style>
