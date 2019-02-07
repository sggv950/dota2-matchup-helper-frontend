<template>
  <section class="main-wrapper">
    <!-- <button @click="reset">Reset</button> -->
    <header class="team-picks">
      <div class="team your-team">
        <!-- <button @click="handlePickHero('yourTeam')">add hero</button> -->
        <hero-pick
          v-for="(pick,index) in 5"
          :pick="picks.yourTeam[index]"
          :key="index"
          @removeHeroPick="handleRemoveHeroPick($event, 'yourTeam')"
        ></hero-pick>
        <i class="fas fa-arrow-left" :class="{active: team === 'yourTeam'}"></i>
        <button
          class="btn-pick your-team"
          :class="{active: team === 'yourTeam'}"
          :disabled="team === 'yourTeam'"
          @click="handlePickHero('yourTeam')"
        >
          <span>{{this.team === 'yourTeam' ? 'Picking' : 'Pick'}}</span> for your team
        </button>
      </div>

      <img
        src="https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_logo.png"
        class="logo"
      >

      <div class="team rival-team">
        <!-- <button @click="handlePickHero('rivalTeam')">add hero</button> -->
        <button
          class="btn-pick rival-team"
          :class="{active: team === 'rivalTeam'}"
          :disabled="team === 'rivalTeam'"
          @click="handlePickHero('rivalTeam')"
        >
          <span>{{this.team === 'rivalTeam' ? 'Picking' : 'Pick'}}</span> for rival team
        </button>
        <i class="fas fa-arrow-right" :class="{active: team === 'rivalTeam'}"></i>
        <hero-pick
          v-for="(pick,index) in 5"
          :pick="picks.rivalTeam[index]"
          :key="index"
          @removeHeroPick="handleRemoveHeroPick($event, 'rivalTeam')"
        ></hero-pick>
      </div>
    </header>

    <hero-list :heroes="heroes" :team="team" :picks="picks" @selectedHero="selectHero"></hero-list>
    <!-- <div class="pick-dashboard-container">
      <div
        class="top-recommends"
        v-if="!isShownHeroList && (picks.yourTeam.length || picks.rivalTeam.length)"
      >
        <h5>Top Recommendations</h5>
        <ul class="top-recommended-list">
          <hero-preview
            v-for="topRecommendedHero in topRecommendedHeroes"
            :hero="topRecommendedHero"
            :key="topRecommendedHero.id"
            class="top-recommended-list-item"
            disabled
          ></hero-preview>
        </ul>
      </div>
      
    </div>-->
  </section>
</template>

<script>
import heroList from "@/components/hero-list";
import heroPick from "@/components/hero-pick";
import heroPreview from "@/components/hero-preview";
export default {
  data() {
    return {
      isShownHeroList: false,
      team: 'yourTeam'
    };
  },
  created() {
    this.$store.dispatch({ type: "getHeroes" });
  },
  methods: {
    handlePickHero(pickingTeam) {
      this.team = pickingTeam;
    },
    selectHero(pick) {
      this.$store.dispatch({ type: "addTeamPicks", pick });
    },
    reset() {
      this.$store.dispatch({ type: "reset" });
    },
    handleRemoveHeroPick(hero, team) {
      var pick = { hero, team };
      this.$store.dispatch({ type: "removeTeamPicks", pick });
    }
  },
  computed: {
    heroes() {
      return this.$store.getters.heroes;
    },
    picks() {
      return this.$store.getters.picks;
    },
    topRecommendedHeroes() {
      return this.heroes.filter((hero, index) => {
        return index < 5;
      });
    }
  },
  components: {
    heroList,
    heroPick,
    heroPreview
  }
};
</script>

<style lang="scss">
// .top-recommends {
//   border: 2px solid black;
//   background-color: beige;
//   width: 25%;
//   h5 {
//     color: black;
//     padding: 10px;
//     margin: 0;
//   }
// }

// .top-recommended-list {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   list-style: none;
//   padding: 0;
// }

// .top-recommended-list-item {
//   margin: 0 auto;
// }

// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.2s;
// }

// .team-picks {
//   width: 65%;
// }

// .team {
//   background-color: gray;
//   margin: 0 auto;
//   height: 130px;
//   width: 100%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// }
</style>
