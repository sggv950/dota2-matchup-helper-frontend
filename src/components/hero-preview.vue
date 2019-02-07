<template>
  <li :class="{list__hero: forList, selected: !forList} ">
      <img
        class="card__image"
        :src="'https://api.opendota.com'+ hero.img"
        :alt="hero.localized_name"
      >
      <i class="icon-remove-hero fas fa-times" v-if="!forList"></i>
      <div v-if="forList" class="card__title">{{hero.localized_name}}</div>
  </li>
</template>

<script>
export default {
  props: ["hero", "forList"]
};
</script>

<style lang="scss" scoped>

</style>

