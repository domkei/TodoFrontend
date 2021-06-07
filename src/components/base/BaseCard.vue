<template>
  <div class="BaseCard">
    <div class="BaseCard-heading">
      <h2>name</h2>
      <base-icon name="edit"></base-icon>
    </div>
    <p class="BaseCard-description">description</p>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { BaseIcon },
};
</script>

<style lang="scss" scoped>
.BaseCard {
  width: 80%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;

  &-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      margin-top: 0;
    }
  }
  &-description {
    text-align: left;
  }
}
</style>
