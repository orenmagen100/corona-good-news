<template>
  <div>
    <div v-show="!onSearch">
      <LeadArticle />
      <Vitrina />
    </div>
    <div v-show="onSearch">
      <SearchOutput :formContent="searchFormContent" />
    </div>

    <Sections />
  </div>
</template>

<script>
  import Vitrina from "../components/Vitrina.vue";
  import LeadArticle from "../components/LeadArticle.vue";
  import Sections from "../components/Sections.vue";
  import SearchOutput from "../components/SearchOutput.vue";

  export default {
    data() {
      return {
        onSearch: false,
        formContent: {}
      };
    },
    components: {
      Vitrina,
      LeadArticle,
      Sections,
      SearchOutput
    },
    computed: {
      searchFormContent() {
        return this.formContent;
      }
    },
    created() {
      this.$root.$on("search", form => {
        this.onSearch = true;
        this.formContent = form;
        this.$root.$emit("resultArrived", this.formContent);
      });
      this.$root.$on("navigate", () => {
        this.onSearch = false;
      });
    }
  };
</script>

<style lang="scss" scoped></style>
