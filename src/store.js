import Vue from "vue";
import Vuex from "vuex";
import heroService from "./services/hero.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
    picks: {
      yourTeam: [],
      rivalTeam: []
    }
  },
  mutations: {
    setHeroes(state, { heroes }) {
      state.heroes = heroes;
    },
    addTeamPicks(state, { pick }) {
      state.picks[pick.team].push(pick.hero);
    },
    removeTeamPicks(state, {pick}) {
      var heroIdx = state.picks[pick.team].findIndex(hero => {
        return hero.localized_name === pick.hero.localized_name;
      });
      state.picks[pick.team].splice(heroIdx, 1);
    },
    updateHeroesPriority(state, { recommededHeroes }) {
      state.heroes = recommededHeroes;
    },
    reset(state) {
      state.picks.yourTeam = [];
      state.picks.rivalTeam = [];
    }
  },
  actions: {
    getHeroes({ commit }) {
      return heroService.getHeroes().then(heroes => {
        commit({ type: "setHeroes", heroes });
      });
    },
    addTeamPicks({ commit, dispatch }, { pick }) {
      commit({ type: "addTeamPicks", pick });
      dispatch({ type: "updateHeroesPriority" });
    },
    updateHeroesPriority({ state, commit }) {
      var recommededHeroes = heroService.updateHeroesPriority(state.picks);
      commit({ type: "updateHeroesPriority", recommededHeroes });
    },
    reset({ commit, dispatch }) {
      commit({ type: "reset" });
      dispatch({ type: "getHeroes" });
    },
    removeTeamPicks({ commit, dispatch }, { pick }) {
      commit({type: "removeTeamPicks", pick});
      dispatch({ type: "updateHeroesPriority" });
    }
  },
  getters: {
    heroes: state => state.heroes,
    picks: state => state.picks,
    getHeroByName: state => heroName => state.heroes.find(hero => hero.localized_name === heroName)
  }
});
