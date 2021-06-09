<template>
  <div class="Home">
    <div class="Home-description">
      <h1>TodoMate helps you with your daily tasks</h1>
      <p>Start by creating a New Todo List</p>
      <base-button @click="redirectOnClick">Get started</base-button>
    </div>
    <img class="Home-image" :src="background" alt="" />
  </div>
</template>

<script>
import background from "../assets/landingPage/undraw_Checklist__re_2w7v.svg";
import BaseButton from "../components/base/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      background: background,
    };
  },
  methods: {
    redirectOnClick() {
      this.$router.push("/create");
    },
  },
};
</script>

<style lang="scss" scoped>
.Home {
  position: relative;
  &-description {
    text-align: left;
    margin-top: 40px;

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 28px;
    }
  }
}
</style>
