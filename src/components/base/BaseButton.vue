<template>
  <Button class="Btn"><slot></slot></Button>
</template>

<style lang="scss" scoped>
.Btn {
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  display: block;
  background-color: $color-main-purple;
  cursor: pointer;
  font-size: 16px;
  font-family: $font;
  transition: all 0.3s;
  border: 0;

  &:hover {
    background: #bb86fcb7;
  }
}
</style>
