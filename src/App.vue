<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld/>
  </div>
</template>

<script>
// import draggable from 'vuedraggable'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // draggable,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  border-radius: 10px;
  color: #1c1c1c;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
}
body{
  color: #fff;
  background-color: #cfcfcf;
}
</style>
