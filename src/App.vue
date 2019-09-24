<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
/*#app {
  fonts-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-fonts-smoothing: antialiased;
  -moz-osx-fonts-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
