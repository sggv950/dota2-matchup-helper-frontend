<template>
  <section class="hero-container">
    <button @click="reset">Reset</button>
    
    <div class="pick-dashboard-container">
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
      <div class="team-picks" v-if="!isShownHeroList">
        <h3>Your team</h3>
        <div class="team your-team">
        <!-- <div class="team your-team" v-if="!isShownHeroList || (isShownHeroList && (team === 'yourTeam' || !team))"> -->
          <button @click="handlePickHero('yourTeam')">add hero</button>
          <hero-pick
            v-for="(pick,index) in 5"
            :pick="picks.yourTeam[index]"
            :key="index"
            @removeHeroPick="handleRemoveHeroPick($event, 'yourTeam')"
          ></hero-pick>
        </div>
        
        <h3>Rival team</h3>
        <div class="team rival-team">
        <!-- <div class="team rival-team" v-if="!isShownHeroList || (isShownHeroList && (team === 'rivalTeam' || !team))"> -->
          <button @click="handlePickHero('rivalTeam')">add hero</button>
          <hero-pick 
            v-for="(pick,index) in 5" 
            :pick="picks.rivalTeam[index]" 
            :key="index"
            @removeHeroPick="handleRemoveHeroPick($event, 'rivalTeam')"
          ></hero-pick>
        </div>
      </div>
    </div>
        <hero-list
        :heroes="heroes"
        :team="team"
        :picks="picks"
        v-if="isShownHeroList"
        @selectedHero="selectHero"
        @close="closeList"
      ></hero-list>
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
      team: null
    };
  },
  created() {
    this.$store.dispatch({ type: "getHeroes" });
  },
  methods: {
    toggleHeroList() {
      this.isShownHeroList = !this.isShownHeroList;
    },
    handlePickHero(pickingTeam) {
      this.team = pickingTeam;
      this.toggleHeroList();
    },
    selectHero(pick) {
      this.$store.dispatch({ type: "addTeamPicks", pick });
      this.toggleHeroList();
    },
    reset() {
      this.$store.dispatch({ type: "reset" });
    },
    handleRemoveHeroPick(hero, team) {
      var pick = { hero, team };
      this.$store.dispatch({ type: "removeTeamPicks", pick });
    },
    closeList(){
      this.toggleHeroList();
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

<style lang="scss" scoped>
.pick-dashboard-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
}

.top-recommends {
  border: 2px solid black;
  background-color: beige;
  width: 25%;
  h5 {
    color: black;
    padding: 10px;
    margin: 0;
  }
}

.top-recommended-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.top-recommended-list-item {
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.team-picks {
  width: 65%;
}

.team {
  background-color: gray;
  margin: 0 auto;
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
