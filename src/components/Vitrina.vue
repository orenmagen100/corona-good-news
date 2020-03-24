<template>
  <div>
    <div class="articleWrapper">
      <b-container fluid="md">
        <b-row class="section-row">
          <b-col>
            <b-row>
              <div class="d-flex mt-3 align-items-baseline section-title">
                <p
                  class="section-category text-left pr-2"
                  @click="drugsLimit = null"
                >
                  Medical Discoveries
                </p>
                <span class="right-arrow-more">
                  <i class="fas fa-long-arrow-alt-right fa-2x"></i>
                </span>
              </div>
            </b-row>

            <b-row
              class="border-bottom border-primary d-flex justify-content-star article-row"
            >
              <ul
                v-for="article in drugsObj"
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
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid="md">
        <b-row class="section-row">
          <b-col>
            <b-row>
              <div
                class="d-flex mt-3 align-items-baseline"
                @click="humanLimit = null"
              >
                <p class="section-category text-left pr-2">
                  The Human Spirit
                </p>
                <span class="right-arrow-more">
                  <i class="fas fa-long-arrow-alt-right fa-2x"></i>
                </span>
              </div>
            </b-row>

            <b-row
              class="border-bottom border-primary d-flex justify-content-star article-row"
            >
              <ul
                v-for="article in humanObj"
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
          </b-col>
        </b-row>
      </b-container>
      <b-container class="section-row">
        <b-row>
          <b-col>
            <b-row>
              <div
                class="d-flex mt-3 align-items-baseline"
                @click="ecoLimit = null"
              >
                <p class="section-category text-left pr-2">
                  Ecology And The Planet
                </p>
                <span class="right-arrow-more">
                  <i class="fas fa-long-arrow-alt-right fa-2x"></i>
                </span>
              </div>
            </b-row>

            <b-row
              class="border-bottom border-primary d-flex justify-content-star article-row"
            >
              <ul
                v-for="article in ecoObj"
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
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    name: "Vitrina",
    async created() {
      await this.getGoodNews();
    },
    methods: {
      goToArticle(link) {
        window.open(link, "_blank");
      },
      async getGoodNews() {
        this.drugsArticles = [];
        this.humanArticles = [];

        let promisesList = [];
        let queries = [
          "(coronavirus OR COVID-19 ) AND (cured OR drugs OR vaccine OR succesfull) -gal -died -traders -chaos -stock -trump -crisis",
          "(coronavirus OR COVID-19 ) AND (benefits OR beneficiary OR smile OR sing OR successful OR joy OR triumph OR happiness OR hope) -'Isn't Happy' -gal -died -Trump’s -'not happy' -traders -chaos -stock -unemployment -trump -losing -crisis",
          "(coronavirus OR COVID-19 ) AND (climate OR nature OR ecology OR Dolphins) -Greta -UN "
        ];
        queries.forEach(q => {
          let promise = this.getSingleCategoryNews(q);
          promisesList.push(promise);
        });
        let allArticles = await Promise.all(promisesList);
        this.drugsArticles = allArticles[0];
        this.humanArticles = allArticles[1];
        this.ecoArticles = allArticles[2];
      },
      async getSingleCategoryNews(query) {
        const basicUrl = "https://newsapi.org/v2/everything?qInTitle=";
        const yesterdayFormatted = moment(this.today)
          .subtract(20, "days")
          .format("YYYY-MM-DD");
        const options =
          `&from=${yesterdayFormatted}` +
          "&sortBy=popularity" +
          "&apiKey=b85391ac68794a59a6561fccc33460d3";
        const url = basicUrl + query + options;
        let req = new Request(url);
        const response = await fetch(req);
        let data = await response.json();
        return data.articles;
      }
    },
    data() {
      return {
        drugsArticles: [],
        humanArticles: [],
        ecoArticles: [],
        drugsLimit: 3,
        humanLimit: 3,
        ecoLimit: 3,
        today: new Date()
      };
    },
    computed: {
      drugsObj() {
        return this.drugsLimit
          ? this.drugsArticles.slice(0, this.drugsLimit)
          : this.drugsArticles;
      },
      humanObj() {
        return this.humanLimit
          ? this.humanArticles.slice(0, this.humanLimit)
          : this.humanArticles;
      },
      ecoObj() {
        return this.ecoLimit
          ? this.ecoArticles.slice(0, this.ecoLimit)
          : this.ecoArticles;
      }
    }
  };
</script>

<!-- Add "scoped"   attribute to limit CSS to this component only -->

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
  .section-title {
  }
</style>
