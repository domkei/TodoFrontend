<template>
  <div class="Dashboard">
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.Dashboard {
  padding: 20px;

  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.4s ease;
  }

  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
