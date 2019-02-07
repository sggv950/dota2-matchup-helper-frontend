<template>
  <hero-preview v-if="pick" :hero="pick" :forList="forList" class="hero-preview" @click.native="removeHeroPick"></hero-preview>
  <div class="hero-preview" v-else>
    <span v-if="pick" class="remove-hero-pick-btn" @click.native="removeHeroPick">&times;</span>
    <img src="@/assets/dota-logo-300.png">
    <!-- <button v-if="pick" class="remove-hero-pick-btn" @click="removeHeroPick">Remove</button> -->
  </div>
</template>

<script>
import heroPreview from "./hero-preview.vue";
export default {
  components: {
    heroPreview
  },
  data() {
    return {
      forList: false
    }
  },
  props: ["pick"],
  computed: {
    pickImg() {
      return this.pick
        ? "https://api.opendota.com" + this.pick.img
        : "/dota-logo-300.png";
    }
  },
  methods: {
    removeHeroPick() {
      this.$emit("removeHeroPick", this.pick);
    }
  }
};
</script>
