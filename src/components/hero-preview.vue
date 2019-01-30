<template>
  <li class="card__item">
    <div class="card">
      <img
        class="card__image"
        :src="'https://api.opendota.com'+ hero.img"
        :alt="hero.localized_name"
      >
      <div class="card__content">
        <div class="card__title">{{hero.localized_name}}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["hero"]
};
</script>

<style lang="scss" scoped>
.card__item {
  display: flex;
  list-style: none;
  width: 8rem;
  align-items: center;
}

.card {
  margin: 0.5rem;
  width: 100%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
    .card__image {
      opacity: 0.9;
    }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
    .card__image {
      opacity: 1;
    }
  }
}

.card__image {
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
}

.card__title {
  color: white;
  background-color: lighten(gray, 10%);
  font-size: 0.5rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>

