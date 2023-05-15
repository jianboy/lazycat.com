<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Home></Home>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
@import url(./assets/css/main.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  padding: 0;
  margin: 0;
}
body{
  box-sizing: border-box;
}

</style>
