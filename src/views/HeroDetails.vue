<template>
    <section v-if="this.hero">
        <h1>{{hero.localized_name}}</h1>
        <img
        :src="'https://api.opendota.com'+ hero.img"
        :alt="hero.localized_name"
      >
      <router-link to="/library" tag="button">back</router-link>
    </section>
</template>

<script>
export default {
  data() {
    return {
      heroName: ""
    };
  },
  created() {
    this.$store.dispatch({ type: "getHeroes" });
    const heroName = this.$route.params.heroName;
    this.heroName = heroName;
  },
  computed: {
    hero() {
      return this.$store.getters.getHeroByName(this.heroName);
    }
  }
};
</script>

<style>
</style>
