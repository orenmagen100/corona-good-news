<template>
  <div id="app">
    <Navbar />
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
  import "./styles/_variables.scss";
  import Navbar from "./components/Navbar.vue";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  export default {
    name: "App",
    components: {
      Navbar,
      Header,
      Footer
    },
    metaInfo() {
      return {
        title: "Corona Good News Engine",
        titleTemplate: null,
        meta: [
          { property: "og:title", content: "Corona Good News Engine" },
          { property: "og:site_name", content: "Corona Positive News" },
          { property: "og:type", content: "website" },
          {
            property: "og:image",
            content:
              "https://www.cleanenergywire.org/sites/default/files/styles/gallery_image/public/forest.jpg?itok=3gsemDb3"
          },
          {
            property: "og:description",
            content:
              "A cov-19 positive news engine that searches for good hopeful articles"
          }
        ]
      };
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
