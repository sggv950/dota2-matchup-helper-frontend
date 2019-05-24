<template>
  <section>
    <ul class="cards">
      <hero-preview v-for="hero in heroes" :hero="hero" :forList="forList" :key="hero.id" @click.native="handleHeroDetails(hero.localized_name)"></hero-preview>
    </ul>
  </section>
</template>

<script>
import heroPreview from "@/components/hero-preview";
export default {
  components: {
    heroPreview
  },
  data() {
    return {
        forList: true
    };
  },
  created() {
    this.$store.dispatch({ type: "getHeroes" });
  },
  methods: {
    handleHeroDetails(name) {
      console.log("handleHeroDetails", name);
      this.$router.push({ path: `/library/${name}`});
    }
  },
  computed: {
    heroes() {
      return this.$store.getters.heroes;
    }
  }
};
</script>

<style>
</style>
