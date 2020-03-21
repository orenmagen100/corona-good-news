<template>
  <div>
    <div class="article">
      <b-container class="bv-example-row">
        <b-row class="main-title pt-3 border-bottom border-primary">
          <p>Optimistic Articles From Today,</p>
        </b-row>
        <b-row>
          <b-col class="mt-5">
            <h4 class="mb-3">Vaccine Development And Recovery</h4>
            <ul v-for="article in drugsArticles" :key="article.id">
              <img :src="article.urlToImage" height="150px" class="mb-1" />
              <p>{{ article.source.name }}</p>
              <a class="title" :href="article.url">{{ article.title }}</a>
            </ul>
          </b-col>
          <b-col class="mt-5">
            <h4 class="mb-3">The Amazing Human Spirit</h4>
            <ul v-for="article in humanArticles" :key="article.id">
              <img :src="article.urlToImage" height="150px" class="mb-1" />
              <p>{{ article.source.name }}</p>
              <a class="title" :href="article.url">{{ article.title }}</a>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <h3>Recent Articles:</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Vitrina",
    async created() {
      await this.getGoodNews();
    },
    methods: {
      async getGoodNews() {
        this.drugsArticles = [];
        this.humanArticles = [];

        let promisesList = [];
        let queries = [
          "(coronavirus OR COVID-19 ) AND (cured OR drugs OR vaccine OR succesfull) -gal -died -traders -chaos -stock -trump -crisis",
          "(coronavirus OR COVID-19 ) AND (benefits OR beneficiary OR smile OR sing OR successful OR joy OR triumph OR happy OR happiness OR hope) -'Isn't Happy' -gal -died -Trump’s -'not happy' -traders -chaos -stock -unemployment -trump -losing -crisis"
        ];
        queries.forEach(q => {
          let promise = this.getSingleCategoryNews(q);
          promisesList.push(promise);
        });
        let allArticles = await Promise.all(promisesList);
        this.drugsArticles = allArticles[0];
        this.humanArticles = allArticles[1];
      },
      async getSingleCategoryNews(query) {
        const basicUrl = "https://newsapi.org/v2/everything?qInTitle=";
        const options =
          "&from=2020-03-20" +
          "&sortBy=popularity" +
          "&apiKey=b85391ac68794a59a6561fccc33460d3";
        const url = basicUrl + query + options;
        let req = new Request(url);
        const response = await fetch(req);
        let data = await response.json();
        console.log(data.articles);
        return data.articles;
      }
    },
    data() {
      return {
        drugsArticles: [],
        humanArticles: []
      };
    }
  };
</script>

<!-- Add "scoped"   attribute to limit CSS to this component only -->
<style scoped>
  .article {
    background-color: #c3e679;
  }
  .title {
    font-size: 1.3rem;
  }
  .main-title {
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
</style>
