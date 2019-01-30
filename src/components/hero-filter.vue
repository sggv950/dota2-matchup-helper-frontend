<template>
  <section>
    <span class="filter-part-text">
      Name:
    </span>
    <input class="filter-part" ref="nameInput" v-model="filter.name" @input="setListFilter">
    <span class="filter-part-text">Role:</span>
    <select class="filter-part" v-model="filter.role" @change="setListFilter">
      <option>All</option>
      <option>Carry</option>
      <option>Escape</option>
      <option>Nuker</option>
      <option>Initiator</option>
      <option>Durable</option>
      <option>Disabler</option>
      <option>Jungler</option>
      <option>Support</option>
      <option>Pusher</option>
      <option>Escape</option>
    </select>
    <div v-if="team === 'yourTeam' && (this.picks.yourTeam.length || this.picks.rivalTeam.length)" class="filter-part switch-all-rec">
      <span class="filter-part-text">All</span>
      <toggle-switch @toggleChange="toggleRecommendedHeroes"></toggle-switch>
      <span class="filter-part-text">Recommended</span>
    </div>
  </section>
</template>

<script>
import toggleSwitch from "./toggle-switch.vue";
export default {
  props:['team', 'picks'],
  components: {
    toggleSwitch
  },
  data() {
    return {
      filter: {
        name: "",
        role: "All",
        recommended: false
      }
    };
  },
  methods: {
    setListFilter() {
      this.$emit("selectedListFilter", this.filter);
    },
    toggleRecommendedHeroes(isChecked){
      this.filter.recommended = isChecked;
      this.setListFilter();
    }
  },
  mounted(){
    this.$refs.nameInput.focus();
  }
};
</script>

<style lang="scss" scoped>
  .switch-all-rec {
    display: inline-block;
  }
  
  .filter-part {
    &:not(:last-child){
      margin-right: 40px;
    }
  }
  
  .filter-part-text {
    font-size: 1rem;
    margin: 0 10px;
  }
</style>
