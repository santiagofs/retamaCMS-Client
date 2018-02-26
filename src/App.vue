<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  beforeCreate () {
    this.$store.dispatch('settings/getSettings')
    console.log('app before create')
  }
}
</script>

<style lang="scss">
#app {
  // @import "./assets/scss/_settings";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  overflow: hidden;
}
</style>
