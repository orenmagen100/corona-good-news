<template>
  <div id="app">
    <Navbar />
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  import "./styles/_variables.scss";
  import Navbar from "./components/Navbar.vue";
  import Header from "./components/Header.vue";
  export default {
    name: "App",
    components: {
      Navbar,
      Header
    }
  };
</script>
<style lang="scss" scoped>
  body {
    margin: 0;
  }
  #app {
    background: #e9ffb9;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0;
  }
</style>
