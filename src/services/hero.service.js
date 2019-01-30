const axios = require("axios");
const BASE_URL =
  process.env.NODE_ENV !== 'development' ? '' : '//localhost:3001';

import matchupService from "./matchup.service";

var gHeroes;

function getHeroes() {
  if (gHeroes) return Promise.resolve(gHeroes);
  return axios.get("https://api.opendota.com/api/heroStats").then(res => {
    gHeroes = res.data.map(hero => {
      hero.priority = 0;
      return hero;
    });
    return gHeroes;
  });
}

function updateHeroesPriority({ yourTeam, rivalTeam }) {
var gRecommendedHeroes = JSON.parse(JSON.stringify(gHeroes));

  yourTeam.forEach(hero => {
    var heroMatchupData = getHeroFromMatchupData(hero);
    heroMatchupData.goodWith.forEach(name => {
      var tempHero = gRecommendedHeroes.find(hero => {
        return hero.localized_name === name;
      });
      tempHero.priority = tempHero.priority + 2;
    });
  });
  rivalTeam.forEach(hero => {
    var heroMatchupData = getHeroFromMatchupData(hero);
    heroMatchupData.badAgainst.forEach(name => {
      var tempHero = gRecommendedHeroes.find(hero => {
        return hero.localized_name === name;
      });
      tempHero.priority = tempHero.priority + 4;
    });
    heroMatchupData.goodAgainst.forEach(name => {
      var tempHero = gRecommendedHeroes.find(hero => {
        return hero.localized_name === name;
      });
      tempHero.priority = tempHero.priority - 3;
    });
  });

  gRecommendedHeroes.sort((a, b) => b.priority - a.priority);
  var res = filterPickedHeroes(gRecommendedHeroes, yourTeam, rivalTeam);
  return res;
}

function getHeroFromMatchupData(hero) {
  return matchupService.matchups.find(heroData => {
    return heroData.name === hero.localized_name;
  });
}

function filterPickedHeroes(heroes, yourTeam, rivalTeam){
    var pickedHeroes = yourTeam.concat(rivalTeam);
    var res = heroes.filter(hero => {
        return pickedHeroes.every(pickedHero => {
            return hero.localized_name !== pickedHero.localized_name;
        })
    })
    return res;
}

export default {
  getHeroes,
  updateHeroesPriority
};
