<template>
  <div v-for="todo in $store.getters.todos" :key="todo._id" class="SidebarEntry" :id="todo._id">
    <base-icon name="puzzle" class="SidebarEntry-icon"></base-icon>
    <router-link :to="`/todos/${todo._id}`" class="Sidebar-nav-link"> {{ todo.name }}</router-link>
  </div>
</template>

<script>
import BaseIcon from "../../base/BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      todos: null,
    };
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style lang="scss" scoped>
.SidebarEntry {
  display: flex;
  align-items: center;
  padding: 15px 0;

  &-icon {
    padding-right: 10px;
  }
}
</style>
