<template>
  <div class="Logo">
    <lord-icon
      src="https://cdn.lordicon.com/nocovwne.json"
      trigger="morph"
      colors="primary:#121331,secondary:#e8308c"
      style="width:70px;height:70px"
      class="Logo-src"
    >
    </lord-icon>
    <h1 class="Logo-headline">TodoMate.</h1>
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
    font-size: 16px;
    line-height: 20px;
    text-indent: -15px;
  }
}
</style>
