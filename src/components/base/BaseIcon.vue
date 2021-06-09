<template>
  <img class="Icon" :src="iconComponent" />
</template>

<script>
const icons = {
  puzzle: require("../../assets/icons8-puzzle.svg"),
  document: require("../../assets/icons8-dokument.svg"),
  settings: require("../../assets/icons8-einstellungen.svg"),
  info: require("../../assets/icons8-info.svg"),
  edit: require("../../assets/icons8-bearbeiten.svg"),
  home: require("../../assets/icons8-zuhause.svg"),
  plus: require("../../assets/icons8-plus.svg"),
  delete: require("../../assets/icons8-müll.svg"),
  deleteBig: require("../../assets/icons8-löschenBIG.svg"),
  checked: require("../../assets/icons8-geprüftNew.svg"),
};

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>

<style lang="scss" scoped>
.Icon {
  filter: $color-icons-white;
}

.black {
  filter: $color-icons-black;
}

.delete {
  &:hover {
    filter: invert(13%) sepia(94%) saturate(4431%) hue-rotate(330deg) brightness(101%) contrast(110%);
  }
}
</style>
