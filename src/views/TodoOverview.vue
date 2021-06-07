<template>
  <div class="TodoOverview">
    <div class="TodoOverview-heading"><h1>Current Todo</h1></div>

    <div class="TodoOverview-todos">
      <base-card-container></base-card-container>
      <base-card-container></base-card-container>
      <base-card-container></base-card-container>
    </div>
  </div>
</template>

<script>
import BaseCardContainer from "../components/base/BaseCardContainer.vue";
export default {
  components: { BaseCardContainer },
};
</script>

<style lang="scss" scoped>
.TodoOverview {
  display: flex;
  flex-direction: column;

  h1 {
    text-align: left;
    padding: 20px;
  }

  &-todos {
    display: flex;
    justify-content: space-around;
  }
}
</style>
