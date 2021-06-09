<template>
  <Button class="Btn"><slot></slot></Button>
</template>

<style lang="scss" scoped>
.Btn {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  background: #ee63a8;
  cursor: pointer;
  font-size: 16px;
}
</style>
