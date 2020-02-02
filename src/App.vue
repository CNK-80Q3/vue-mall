<template>
  <div id="app">
    <router-view/>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
</style>
