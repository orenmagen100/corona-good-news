<template>
  <div>
    <div class="articleWrapper">
      <b-container class="section-row">
        <b-row>
          <b-col>
            <b-row>
              <div class="d-flex mt-3 align-items-baseline">
                <p class="section-category text-left pr-2">
                  Search Results:
                </p>
                <span class="right-arrow-more">
                  <i class="fas fa-long-arrow-alt-right fa-2x"></i>
                </span>
              </div>
            </b-row>

            <b-row
              v-if="finishedLoading"
              class="border-bottom border-primary d-flex justify-content-star article-row"
            >
              <ul
                v-for="article in searchArticles"
                :key="article.id"
                class="mb-5 article pl-0"
              >
                <b-col class="mt-3 text-left pl-0">
                  <div @click="goToArticle(article.url)" class="imageWrapper">
                    <img
                      :src="article.urlToImage"
                      height="145px"
                      class="mb-1"
                    />
                  </div>
                  <p class="source">
                    {{ article.source.name }}
                  </p>
                  <a class="title" :href="article.url" target="_blank">{{
                    article.title.substring(0, 120) + "..."
                  }}</a>
                </b-col>
              </ul>
            </b-row>
            <b-row v-if="!finishedLoading" class="my-3">
              <b-col cols="12">
                <svg class="loading-spinner">
                  <circle
                    :cx="circlePositions[index] && circlePositions[index].x"
                    :cy="circlePositions[index] && circlePositions[index].y"
                    :r="item.radius"
                    :fill="item.color"
                    v-for="(item, index) in circles"
                    :key="index"
                  />
                </svg>
              </b-col>
            </b-row>
            <b-row
              v-if="finishedLoading && !this.searchArticles.length"
              class="my-3"
            >
              <b-col cols="12"> Couldn't find results</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import moment from "moment";
  const CENTER_X = 50;
  const CENTER_Y = 50;
  const RADIUS = 20;
  function positionOnCircle(radius, angle, center) {
    return {
      x: center.x + radius * Math.cos(toRadians(angle)),
      y: center.y + radius * Math.sin(toRadians(angle))
    };
  }

  function toRadians(angle) {
    return (angle * Math.PI) / 180;
  }

  function calculatePositions(component) {
    let angleIncrement = 360 / component.circles.length;
    let positions = {};
    component.circles.forEach((circle, index) => {
      positions[index] = positionOnCircle(RADIUS, angleIncrement * index, {
        x: CENTER_X,
        y: CENTER_Y
      });
    });
    return positions;
  }

  export default {
    name: "SearchOutput",
    props: ["formContent"],
    mounted() {
      this.$root.$on("resultArrived", data => {
        this.getSingleCsategoryNews(data);
      });
    },
    created() {
      this.interval = setInterval(() => {
        this.counter++;
        this.circles = this.circles.map((item, index) => ({
          ...item,
          radius: (this.counter + index) % 8
        }));
      }, 70);
    },
    destroyed() {
      clearInterval(this.interval);
    },
    data() {
      return {
        searchArticles: [],
        finishedLoading: false,
        circles: [
          { color: "#E0F2F1", radius: 0 },
          { color: "#B2DFDB", radius: 0 },
          { color: "#80CBC4", radius: 0 },
          { color: "#4DB6AC", radius: 0 },
          { color: "#26A69A", radius: 0 },
          { color: "#00897B", radius: 0 },
          { color: "#00796B", radius: 0 },
          { color: "#00695C", radius: 0 },
          { color: "#004D40", radius: 0 }
        ],
        counter: 0,
        interval: null
      };
    },
    computed: {
      circlePositions: calculatePositions
    },
    methods: {
      goToArticle(link) {
        window.open(link, "_blank");
      },
      async getSingleCsategoryNews(props) {
        this.finishedLoading = false;
        const query = `(coronavirus OR COVID-19 ) AND (${props.searchInput}) -panic -died -traders -chaos -stock -trump -crisis`;
        const basicUrl = "https://newsapi.org/v2/everything?qInTitle=";
        const yesterdayFormatted = moment(new Date())
          .subtract(20, "days")
          .format("YYYY-MM-DD");
        const options =
          `&from=${yesterdayFormatted}` +
          `&language=${props.selectedLan}` +
          "&sortBy=popularity" +
          "&apiKey=b85391ac68794a59a6561fccc33460d3";
        const url = basicUrl + query + options;
        let req = new Request(url);
        const response = await fetch(req);
        let data = await response.json();
        this.finishedLoading = true;
        this.searchArticles = data.articles;
        console.log(this.searchArticles);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .articleWrapper {
    background-color: $secondary-background;
  }
  .title {
    font-size: 1.1rem;
  }
  .imageWrapper {
    cursor: pointer;
  }
  .source {
    font-size: 0.8rem;
  }
  .article {
    max-width: 30%;
    @include media-breakpoint-down(sm) {
      max-width: 100%;
    }
  }
  .section-category {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    &:hover {
      color: $primary-green;
    }
  }
  .right-arrow-more {
    color: $primary-green;
  }
  .article-row {
    flex-direction: row;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }
  .section-row {
    @include media-breakpoint-down(sm) {
      padding-left: 2rem;
    }
  }
  .loading-spinner {
    width: 100px;
    height: 100px;
  }
</style>
