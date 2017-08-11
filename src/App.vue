<template>
  <div id="app">
    <appHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from '@/components/Header'

export default {
  components: {
    appHeader,
  },
}
</script>

<style lang="stylus">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f2f3f5;
}
body {
  // min-height: 100%;
}
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 55px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.container
  max-width 800px
  margin 0 auto
  box-sizing border-box
  padding 17px 20px

  a
    color #0064a8
    &:hover
      color #a03000
</style>
