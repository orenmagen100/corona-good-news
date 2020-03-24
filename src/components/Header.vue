<template>
  <b-container class="header-container">
    <b-row>
      <b-col cols="12" class="border-bottom border-primary">
        <div class="logo">
          <img alt="Vue logo" src="../assets/logo.png" />
          <p class="main-title">
            Recent Optimistic Articles From Today,
            {{ today | moment("dddd, MMMM Do YYYY") }}
          </p>
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

  .main-title {
    font-weight: bold;
    font-size: 1.3rem;
    @include media-breakpoint-down(sm) {
      font-size: 1.1rem;
    }
  }
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
