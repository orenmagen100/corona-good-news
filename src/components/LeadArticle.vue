<template>
  <div class="lead-container">
    <b-container class="py-5 border-bottom border-primary">
      <b-row>
        <p class="main-title">
          Recent Optimistic Articles From Today,
          {{ today | moment("dddd, MMMM Do YYYY") }}
        </p>
      </b-row>
      <b-row class="lead-wrapper">
        <b-col cols="12" md="4" class="mt-3 text-left">
          <p class="source">
            OLIVIA BLAIR - ELLE NEWS
          </p>
          <a
            class="title"
            href="https://www.elle.com/uk/life-and-culture/g31658888/coronavirus-covid-19-good-news/"
            target="_blank"
            >25 Positive News Stories You May Have Missed During The Coronavirus
            Outbreak</a
          >
          <p class="mt-3">
            In dark and distressing times, humankind can really pull through to
            show its good side...
          </p>
        </b-col>
        <b-col cols="8">
          <div @click="goToArticle()" class="imageWrapper">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ostia-residents-display-a-banner-which-reads-everything-news-photo-1584362356.jpg?crop=1.00xw:0.758xh;0,0.194xh&resize=980:*"
              height="350px"
              class="mb-1"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "LeadArticle",
    data() {
      return {
        today: new Date()
      };
    },
    methods: {
      goToArticle() {
        window.open(
          "https://www.elle.com/uk/life-and-culture/g31658888/coronavirus-covid-19-good-news/",
          "_blank"
        );
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .lead-container {
    background: #fffaf0;
  }
  .imageWrapper {
    cursor: pointer;
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }
  .source {
    font-size: 0.7rem;
  }
  .title {
    font-size: 1.4rem;
  }
  .main-title {
    font-weight: bold;
    font-size: 1.3rem;
    @include media-breakpoint-down(sm) {
      padding: 1.2rem;
      font-size: 1.1rem;
    }
  }
  .lead-wrapper {
    @include media-breakpoint-down(sm) {
      flex-direction: column-reverse;
    }
  }
</style>
