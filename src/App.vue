<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Main />
    <Vitrina />
  </div>
</template>

<script>
  import Main from "./components/Main.vue";
  import Vitrina from "./components/Vitrina.vue";

  export default {
    name: "App",
    components: {
      Main,
      Vitrina
    }
  };
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #5f4118;
    background-color: #e9ffb9;
    margin: 0;
  }
</style>
