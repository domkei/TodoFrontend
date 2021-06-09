<template>
  <img :src="iconComponent" />
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
  checked: require("../../assets/icons8-geprüft.svg"),
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
