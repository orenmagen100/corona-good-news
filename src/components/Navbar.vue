<template>
  <b-container class="nav-container full-width">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#" @click="onNavigate">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="ml-2" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#whyPositive">Why Positive?</b-nav-item>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="https://github.com/orenmagen100/corona-good-news"
              >Contribute Code</b-nav-item
            >
            <b-nav-item
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TQE93CNS3GG4J"
              >Buy Me A Hand-Sanitizer</b-nav-item
            >
            <div v-on:click="buyMe">
              <img
                class="sanitizer"
                alt="sanitizer"
                src="../assets/handsanitizer.png"
              />
            </div>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit="onSubmit">
              <b-form-input
                size="md"
                class="mr-sm-2"
                v-model="form.searchInput"
                placeholder="Search Articles in..."
              ></b-form-input>
              <div class="mx-1 grey-col">
                Lang:
              </div>
              <b-form-select
                v-model="form.selectedLan"
                :options="languages"
                class="mx-1"
              ></b-form-select>

              <b-button size="md" class="my-2 my-sm-0 mx-2" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        form: {
          searchInput: "",
          selectedLan: "en"
        },
        languages: [
          "ar",
          "de",
          "en",
          "es",
          "fr",
          "he",
          "it",
          "nl",
          "no",
          "pt",
          "ru",
          "se",
          "ud",
          "zh"
        ]
      };
    },
    methods: {
      buyMe() {
        window.open(
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TQE93CNS3GG4J",
          "_blank"
        );
      },
      onNavigate() {
        this.$root.$emit("navigate");
      },
      onSubmit(evt) {
        evt.preventDefault();
        this.$root.$emit("search", this.form);
      },
      scrollIntoView(evt) {
        evt.preventDefault();
        const href = evt.target.getAttribute("href");
        const el = href ? document.querySelector(href) : null;
        if (el) {
          this.$refs.content.scrollTop = el.offsetTop;
        }
      }
    }
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
  .sanitizer {
    max-width: 38px;
    cursor: pointer;
  }
</style>
