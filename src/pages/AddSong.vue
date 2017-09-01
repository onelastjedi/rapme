<template>
  <div class="add-song container">
    <div class="sub-head">
      <h1>Create a new song</h1>
      <!-- <p class="sub-head-descr">And publish it</p> -->
    </div>
    <form @submit.prevent="createSong({ title })">
      <label>Title</label>
      <input type="text" v-model="title" />
      <template v-if="title">
        <button>Create</button>
      </template>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: null
  }),
  methods: {
    createSong () {
      this.$store.dispatch({
        type: 'createSong',
        title: this.title,
        authorId: this.$store.state.user.current.userId
      })
    }
  }
}
</script>

<style lang="stylus">
    .add-song
      position relative
      padding 17px 47px

      .sub-head
        margin-top 30px
        padding-bottom 7px
        border-bottom 1px #e1e4e8 solid

        h1
          font-size 24px
          margin-bottom 7px

        &-descr
          margin-top 0
          font-size 14px
          color #586069
</style>
