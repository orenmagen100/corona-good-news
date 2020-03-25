<template>
  <div>
    <LeadArticle />
    <Vitrina />
  </div>
</template>

<script>
  import Vitrina from "../components/Vitrina.vue";
  import LeadArticle from "../components/LeadArticle.vue";

  export default {
    components: {
      Vitrina,
      LeadArticle
    }
  };
</script>

<style lang="scss" scoped></style>
