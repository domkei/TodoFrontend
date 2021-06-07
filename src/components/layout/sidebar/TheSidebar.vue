<template>
  <div class="Sidebar">
    <the-logo class="Sidebar-logo"></the-logo>
    <div class="Sidebar-nav">
      <div class="Sidebar-nav-entry">
        <router-link to="/" class="Sidebar-nav-link">
          <base-icon class="Sidebar-nav-icon" name="home" />
          Home</router-link
        >
      </div>
      <div class="Sidebar-nav-entry">
        <router-link to="/create" class="Sidebar-nav-link">
          <base-icon class="Sidebar-nav-icon" name="document" />
          New Todo
        </router-link>
      </div>
    </div>
    <h3 class="Sidebar-myTodos">My Todos</h3>
    <hr />
    <sidebar-entry :entries="SidebarEntries"></sidebar-entry>
    <div class="Sidebar-info">
      <base-icon name="info" class="Sidebar-icon"></base-icon>
      <p>About</p>
    </div>
  </div>
</template>

<script>
import SidebarEntry from "./SidebarEntry.vue";
import TheLogo from "./TheLogo.vue";
import BaseIcon from "../../base/BaseIcon.vue";

export default {
  components: {
    SidebarEntry,
    TheLogo,
    BaseIcon,
  },
  data() {
    return {
      SidebarEntries: ["Overview", "Create new", "Todos"],
    };
  },
};
</script>

<style lang="scss" scoped>
.Sidebar {
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  height: 100vh;

  &-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;

    &-entry {
      padding: 15px 0;
      display: flex;
    }

    &-icon {
      padding-right: 10px;
    }

    &-link {
      text-decoration: none;
      display: flex;
      align-items: center;
    }
  }

  &-myTodos {
    margin-bottom: 0;
    margin-top: 100px;
  }

  hr {
    border: 0;
    width: 50%;
    margin-left: 0;
    background-color: rgba(232, 48, 140, 0.753);
    height: 2px;
  }

  &-info {
    margin-top: 100px;
    display: flex;
  }
  &-icon {
    padding-right: 10px;
  }
}
</style>
