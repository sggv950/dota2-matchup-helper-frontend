<template>
  <section ref="list">
    <!-- <button @click="goBack()">Close</button> -->
    <hero-filter @selectedListFilter="handleListFilter" :team="team" :picks="picks"></hero-filter>
    <ul class="cards">
      <hero-preview
        v-for="hero in filteredHeroes"
        :hero="hero"
        :key="hero.id"
        :forList="forList"
        @click.native="selectHero(hero)"
      ></hero-preview>
    </ul>
  </section>
</template>

<script>
import heroFilter from "./hero-filter";
import heroPreview from "./hero-preview";
export default {
  props: ["heroes", "team", "picks"],
  components: {
    heroFilter,
    heroPreview
  },
  data() {
    return {
      forList: true,
      listFilter: {
        name: "",
        role: "All",
        recommended: false
      }
    };
  },
  methods: {
    selectHero(hero) {
      const pick = { hero, team: this.team };
      if (
        (this.team === "yourTeam" && this.picks.yourTeam.length < 5) ||
        (this.team === "rivalTeam" && this.picks.rivalTeam.length < 5)
      ) {
        this.$emit("selectedHero", pick);
      }
    },
    handleListFilter(filter) {
      this.listFilter = filter;
    },
    goBack() {
      this.$emit("close");
    }
  },
  computed: {
    recommendedHeroes() {
      if (
        (this.picks.yourTeam.length || this.picks.rivalTeam.length) &&
        this.team === "yourTeam" &&
        this.listFilter.recommended
      ) {
        return this.heroes.filter(hero => {
          return hero.priority > 0;
        });
      } else {
        return this.heroes;
      }
    },
    filteredHeroes() {
      if (this.listFilter.role === "All") {
        return this.recommendedHeroes.filter(hero => {
          return hero.localized_name
            .toLowerCase()
            .includes(this.listFilter.name);
        });
      } else {
        return this.recommendedHeroes
          .filter(hero => {
            return hero.localized_name
              .toLowerCase()
              .includes(this.listFilter.name);
          })
          .filter(hero => {
            return hero.roles.find(role => this.listFilter.role === role);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
