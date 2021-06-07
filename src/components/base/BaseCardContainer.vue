<template>
  <div class="BaseCardContainer">
    <base-card></base-card>
    <base-card></base-card>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
};
</script>

<style lang="scss" scoped>
.BaseCardContainer {
  background: rgba(232, 48, 140, 0.753);
  width: 25vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .BaseCard {
    margin: 20px;
  }
}
</style>
