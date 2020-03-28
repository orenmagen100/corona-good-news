<template>
  <b-container>
    <div class="py-4">
      <b-row align-v="center">
        <b-col>
          <h4 id="whyPositive">Why Positive?</h4>
        </b-col>
      </b-row>
      <b-row class="py-2">
        <b-col>
          <div class="main-para">{{ consts.whyPositive }}</div>
        </b-col>
      </b-row>
    </div>
    <div class="py-4">
      <b-row align-v="center">
        <b-col>
          <h4 id="about">About</h4>
        </b-col>
      </b-row>
      <b-row class="py-2">
        <b-col>
          <div class="main-para">{{ consts.about }}</div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
  import { Consts } from "../assets/consts.js";
  export default {
    name: "Sections",
    data() {
      return {
        consts: Consts
      };
    }
  };
</script>

<style lang="scss" scoped>
  .main-para {
    text-align: left;
    font-size: 1.1rem;
  }
  h4 {
    font-weight: bold;
    font-size: 1.3rem;
  }
</style>
