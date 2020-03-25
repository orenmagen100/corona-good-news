<template>
  <b-container class="nav-container full-width">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="ml-2" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Why Think Positive?</b-nav-item>
            <b-nav-item href="#">Recommended Content</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
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
                v-model="selectedLan"
                :options="languages"
                class="mx-1"
              ></b-form-select>
              <div class="mx-1 grey-col">
                country:
              </div>
              <b-form-select
                v-model="selectedCountry"
                :options="countries"
                class="mx-1"
              ></b-form-select>
              <b-button size="md" class="my-2 my-sm-0 mx-1" type="submit"
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
          searchInput: ""
        },
        countries: [
          "ae",
          "ar",
          "at",
          "au",
          "be",
          "bg",
          "br",
          "ca",
          "ch",
          "cn",
          "co",
          "cu",
          "cz",
          "de",
          "eg",
          "fr",
          "gb",
          "gr",
          "hk",
          "hu",
          "id",
          "ie",
          "il",
          "in",
          "it",
          "jp",
          "kr",
          "lt",
          "lv",
          "ma",
          "mx",
          "my",
          "ng",
          "nl",
          "no",
          "nz",
          "ph",
          "pl",
          "pt",
          "ro",
          "rs",
          "ru",
          "sa",
          "se",
          "sg",
          "si",
          "sk",
          "th",
          "tr",
          "tw",
          "ua",
          "us",
          "ve",
          "za"
        ],
        selectedCountry: "us",
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
        ],
        selectedLan: "en"
      };
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
</style>
