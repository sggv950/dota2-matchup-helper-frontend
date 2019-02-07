<template>
  <section class="filter filter-footer">
    <div>
      <span class="filter filter-part-text">
        Name: &nbsp;
      </span>
      <input class="filter filter-part" ref="nameInput" v-model="filter.name" @input="setListFilter">
    </div>
    <div>
      <span class="filter filter-part-text">Role: &nbsp;</span>
      <select class="filter filter-part" v-model="filter.role" @change="setListFilter">
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
    </div>
    <div v-if="team === 'yourTeam' && (this.picks.yourTeam.length || this.picks.rivalTeam.length)" class="switch-all-rec">
      <!-- <toggle-switch @toggleChange="toggleRecommendedHeroes"></toggle-switch> -->
      <input class="filter" type="checkbox" v-model="filter.recommended" @change="setListFilter()">
      <span class="filter filter-part-text">&nbsp; Recommended</span>
    </div>
  </section>
</template>

<script>
// import toggleSwitch from "./toggle-switch.vue";
export default {
  props:['team', 'picks'],
  components: {
    // toggleSwitch
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

</style>
