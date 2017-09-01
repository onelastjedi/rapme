<template>
  <div class="auth-form">
    <template v-if="error">
      <div class="flash flash-error">
        Incorrect username or password.
        <span class="flash-close" @click="clearErrors">&times;</span>
      </div>
    </template>
    <form @submit.prevent="signinUser({ email, password })">
        <label id="email">Email:</label>
        <input type="text" name="email" v-focus v-model="email" />
        <label id="password">Password:</label>
        <input type="password" name="password" v-model="password" />
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
    password: null
  }),
  computed: {
    error () {
      return this.$store.state.user.error === 'GraphQL error: No user found with that information'
    }
  },
  methods: {
    signinUser () {
      this.$store.dispatch({
        type: 'signinUser',
        email: this.email,
        password: this.password
      })
    },
    clearErrors () {
      this.$store.commit('clearErrors')
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="stylus">
  .auth-form
    box-sizing border-box
    width 320px
    margin 0 auto

    .flash
      position relative
      box-sizing border-box
      font-size 14px
      border-style solid
      border-width 1px
      border-radius 5px
      margin-bottom 15px
      padding 15px 20px

      &-close
        font-size 28px
        line-height 0
        float right
        line-height .5
        color rgba(134, 24, 29, .6)
        cursor pointer

        &:hover
          color rgba(134, 24, 29, 1)

    .flash-error
      color #86181d
      background-color #ffdce0
      border-color rgba(27, 31, 35, .15)

    form
      padding 20px
      box-sizing border-box
      border 1px solid #d8dee2
      border-radius 5px
      background-color white

    label
      display block
      margin-bottom 7px
      font-weight 600
      font-size 15px

    input
      box-sizing border-box
      width 100%
      display block
      padding 6px 8px
      margin-top 5px
      margin-bottom 15px
      font-size 14px
      line-height 20px
      color #24292e
      background-color #fff
      border 1px solid #d1d5da
      border-radius 3px
      outline none
      box-shadow inset 0 1px 2px rgba(27, 31, 35, .075)

      &:focus
        border-color #2188ff
        outline none
        box-shadow inset 0 1px 2px rgba(27, 31, 35, .075), 0 0 0 .2em rgba(3, 102, 214, .3)

    button
      display block
      width 100%
      text-align center
      position relative
      padding 9px 12px
      font-size 15px
      margin-top 20px
      font-weight 600
      line-height 20px
      white-space nowrap
      vertical-align middle
      cursor pointer
      border 1px solid rgba(27,31,35,0.2)
      border-radius 0.25em
      color #fff
      background-color #24292e

      &:focus
        outline none
        box-shadow 0 0 0 0.2em rgba(36, 41, 46, .3)

</style>
