<template>
  <div class="TodoOverview">
    <div class="TodoOverview-heading">
      <h1>{{ todo.name }}</h1>
      <p>{{ todo.description }}</p>
      <div class="TodoOverview-addTask">
        <base-icon name="plus" @click="showModal"></base-icon>
      </div>
    </div>
    <div class="TodoOverview-todos">
      <base-card-container :data="{ todo }"></base-card-container>
    </div>
    <base-modal v-show="isModalVisible" @close="closeModal" :data="{ todo }"> </base-modal>
  </div>
</template>

<script>
import BaseCardContainer from "../components/base/BaseCardContainer.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseModal from "../components/base/BaseModal.vue";

export default {
  components: { BaseCardContainer, BaseIcon, BaseModal },
  created() {
    this.$store.dispatch("getActiveTodo", { id: this.$route.params.id });
  },
  data() {
    return {
      todo: {},
      isModalVisible: false,
    };
  },
  watch: {
    "$store.state.activeTodo"(value) {
      this.todo = value;
    },
    "$route.params.id"(value, oldValue) {
      if (value !== oldValue) {
        this.$store.dispatch("getActiveTodo", { id: this.$route.params.id });
      }
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
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

  p {
    text-align: left;
    padding-left: 20px;
  }

  &-todos {
    display: flex;
    justify-content: space-around;
  }
  &-addTask {
    position: absolute;
    top: 50px;
    right: 50px;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
      filter: invert(62%) sepia(75%) saturate(963%) hue-rotate(98deg) brightness(97%) contrast(101%);
    }
  }
}
</style>
