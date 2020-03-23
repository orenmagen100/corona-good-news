<template>
  <b-container class="header-container">
    <b-row>
      <b-col cols="6">
        <div class="logo">
          <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </b-col>
      <b-col cols="6 p-6">
        <p class="main-title">
          Recent Optimistic Articles From Today,
          {{ today | moment("dddd, MMMM Do YYYY") }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        today: new Date()
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .main-title {
    padding: 12rem 3rem 0 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  .header-container {
    background: $primary-background;
    color: black;
  }
  .logo {
    padding-top: 3rem;
  }
</style>
