<template>
  <b-container class="header-container">
    <b-row>
      <b-col cols="12" class="border-bottom border-primary">
        <div class="logo">
          <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </b-col>
      <b-col cols="8 p-6">
        <!-- <button class="why-positive btn btn-secondary btn-lg">
          Why Positive?
        </button> -->
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

  .header-container {
    background: $primary-background;
    color: black;
  }
  .logo {
    padding-top: 3rem;
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }
  .why-positive {
    margin-top: 8rem;
  }
</style>
