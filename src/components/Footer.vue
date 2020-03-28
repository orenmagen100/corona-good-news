<template>
  <b-container class="nav-container full-width">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="footer">
        <p class="footer-content">All rights reserved - Oren Magen 2020</p>
      </b-navbar>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "Footer"
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .nav-container {
    position: absolute;
    z-index: 3;
    padding: 0;
    max-width: 100%;
  }
  .grey-col {
    color: rgba(255, 255, 255, 0.5);
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-content {
    color: #fff;
    margin-top: 1rem;
  }
</style>
