<template>
  <section class="team-preview">
  <hero-preview v-if="pick" :hero="pick" class="hero-preview"></hero-preview>
    <div class="hero-preview" v-else>
      <img src="@/assets/dota-logo-300.png">
    </div>
  <button v-if="pick" class="remove-hero-pick-btn" @click="removeHeroPick">Remove</button>
  </section>
</template>

<script>
import heroPreview from './hero-preview.vue';
export default {
  components: {
    heroPreview
  },
  props: ["pick"],
  computed: {
    pickImg() {
      return this.pick ? 'https://api.opendota.com'+this.pick.img : "/dota-logo-300.png";
    }
  },
  methods: {
    removeHeroPick(){
      this.$emit("removeHeroPick", this.pick);
    }
  }
};
</script>

<style lang="scss" scoped>
.team-preview {
  list-style: none;
}

.hero-preview {
  width: 100px;
  margin-bottom: -10px;
  img {
    width: 100%;
  }
}

.remove-hero-pick-btn{}

</style>
