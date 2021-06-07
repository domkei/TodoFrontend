<template>
  <div v-for="entry in entries" :key="entry" class="SidebarEntry">
    <base-icon name="puzzle" class="SidebarEntry-icon"></base-icon>
    {{ entry }}
  </div>
</template>

<script>
import BaseIcon from "../../base/BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: {
    entries: {
      type: Array,
      required: true,
    },
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
