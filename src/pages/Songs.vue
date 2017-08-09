<template>
  <div class="songs-page">
    <h1>Songs</h1>
    <template v-if="songs">
      <ul class="songs-list">
        <li v-for="s in songs">
          <router-link :key="s.id" :to="{name: 'Song', params: {id: s.id}}">{{s.title}}</router-link>
        </li>
      </ul>
    </template>
    <template v-else>
      Loading...
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    songs: state => state.songs.all,
  }),
  mounted() {
    this.$store.dispatch('getAllSongs')
  },
}
</script>
