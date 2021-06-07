<template>
  <the-sidebar></the-sidebar>
  <the-dashboard></the-dashboard>
</template>

<script>
import TheSidebar from "./components/layout/sidebar/TheSidebar.vue";
import TheDashboard from "./components/layout/dashboard/TheDashboard.vue";

export default {
  components: {
    TheSidebar,
    TheDashboard,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-areas: "Sidebar Dashboard";
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;

  .Sidebar {
    grid-area: Sidebar;
  }

  .Header {
    grid-area: Header;
  }

  .Dashboard {
    grid-area: Dashboard;
  }
}
</style>
