<template>
  <div class="TodoOverview" :key="updateKey">
    <div class="TodoOverview-heading">
      <div>
        <h1>{{ todo.name }}</h1>
        <p>{{ todo.description }}</p>
      </div>
      <div>
        <base-icon class="TodoOverview-addTask" name="plus" @click="showModal"></base-icon>
        <base-icon class="TodoOverview-deleteTodo" name="deleteBig" @click="deleteTodo"></base-icon>
      </div>
    </div>
    <div class="TodoOverview-todos" :key="updateKey">
      <div>
        <h1>Todo</h1>
        <base-card :data="{ todo }" :tasks="getTodoTasks" :category="`todo`"></base-card>
      </div>
      <div>
        <h1>In progress</h1>
        <base-card :data="{ todo }" :tasks="getInProgressTasks" :category="`unfinished`"></base-card>
      </div>
      <div>
        <h1>Done</h1>
        <base-card :data="{ todo }" :tasks="getDoneTasks" :category="`done`"></base-card>
      </div>
    </div>
    <base-modal v-show="isModalVisible" @close="closeModal" :data="{ todo }"> </base-modal>
  </div>
</template>

<script>
import BaseCard from "../components/base/BaseCard.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseModal from "../components/base/BaseModal.vue";

export default {
  components: { BaseCard, BaseIcon, BaseModal },
  created() {
    this.$store.dispatch("getActiveTodo", { id: this.$route.params.id });
  },
  updated() {},
  data() {
    return {
      todo: {},
      isModalVisible: false,
      updateKey: 0,
    };
  },
  watch: {
    "$store.state.activeTodo"(value) {
      this.todo = value;
    },
    "$store.state.response"(value, oldValue) {
      if (value !== oldValue) this.$store.dispatch("getActiveTodo", { id: this.$route.params.id });
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
    deleteTodo() {
      this.$store.dispatch("deleteTodo", {
        id: this.$route.params.id,
        todo: this.todo,
      });
      // would be better with vue router
      window.location.href = "/";
    },
  },
  computed: {
    getDoneTasks() {
      return this.todo.tasks && this.todo.tasks.filter((item) => item.status === "done");
    },
    getInProgressTasks() {
      return this.todo.tasks && this.todo.tasks.filter((item) => item.status === "unfinished");
    },
    getTodoTasks() {
      return this.todo.tasks && this.todo.tasks.filter((item) => item.status === "todo");
    },
  },
};
</script>

<style lang="scss" scoped>
.TodoOverview {
  display: flex;
  flex-direction: column;

  &-heading {
    display: flex;
    justify-content: space-between;

    div:first-of-type {
      text-align: left;

      h1 {
        font-size: 48px;
        margin-top: 0;
      }
    }
    div {
      margin-top: 20px;
    }
  }

  &-todos {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @include for-phone-only {
      grid-gap: 20px;
    }

    h1 {
      text-align: left;
    }
  }

  &-addTask {
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      filter: invert(73%) sepia(18%) saturate(5844%) hue-rotate(124deg) brightness(96%) contrast(98%);
    }
  }

  &-deleteTodo {
    cursor: pointer;
    &:hover {
      filter: invert(13%) sepia(94%) saturate(4431%) hue-rotate(330deg) brightness(101%) contrast(110%);
    }
  }
}
</style>
