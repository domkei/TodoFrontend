<template>
  <Button class="Btn"><slot></slot></Button>
</template>

<style lang="scss" scoped>
.Btn {
  background: #ee63a8;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid #000;
  cursor: pointer;
  color: #eee;
  border-radius: 10px;
}
</style>
