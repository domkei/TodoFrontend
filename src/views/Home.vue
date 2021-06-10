<template>
  <div class="Home">
    <div class="Home-description">
      <h1>Todo<span>Mate</span> helps you with your daily tasks</h1>
      <p>Start by creating a New Todo List</p>
      <base-button @click="redirectOnClick">Get started</base-button>
    </div>
    <img class="Home-image" :src="background" alt="" />
  </div>
</template>

<script>
import background from "../assets/landingPage/checking.svg";
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

    .Btn {
      margin-top: 50px;
    }
  }

  &-image {
    margin-top: -100px;
  }

  span {
    color: $color-main-purple;
  }
}
</style>
