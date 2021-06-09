<template>
  <div class="Logo">
    <lord-icon
      src="https://cdn.lordicon.com/nocovwne.json"
      trigger="morph"
      colors="primary:#ffffff,secondary:#c69cf4"
      style="width:70px;height:70px"
      class="Logo-src"
    >
    </lord-icon>
    <h1 class="Logo-headline">Todo<span>Mate.</span></h1>
  </div>
</template>

<style lang="scss" scoped>
.Logo {
  display: flex;
  align-items: flex-end;
  position: relative;
  left: -18px;
  margin-bottom: 100px;

  &-src {
  }

  &-headline {
    font-size: 18px;
    line-height: 15px;
    text-indent: -15px;

    span {
      color: $color-main-purple;
    }
  }
}
</style>
